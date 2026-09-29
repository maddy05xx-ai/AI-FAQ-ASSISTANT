import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import defaultFaqs from "./FAQ_DATA.js";

dotenv.config();

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FAQ_FILE = path.join(__dirname, "faqs.json");

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const adminTokens = new Set();

app.use(cors());
app.use(express.json());


// ===============================
// FAQ FILE FUNCTIONS
// ===============================

function loadFAQs() {
    try {
        if (!fs.existsSync(FAQ_FILE)) {
            fs.writeFileSync(
                FAQ_FILE,
                JSON.stringify(defaultFaqs, null, 2)
            );

            return defaultFaqs;
        }

        const data = fs.readFileSync(FAQ_FILE, "utf8").trim();

        if (!data) {
            fs.writeFileSync(
                FAQ_FILE,
                JSON.stringify(defaultFaqs, null, 2)
            );

            return defaultFaqs;
        }

        const faqs = JSON.parse(data);

        if (!Array.isArray(faqs) || faqs.length === 0) {
            fs.writeFileSync(
                FAQ_FILE,
                JSON.stringify(defaultFaqs, null, 2)
            );

            return defaultFaqs;
        }

        return faqs;

    } catch (error) {
        console.error("FAQ loading error:", error);
        return defaultFaqs;
    }
}


function saveFAQs(faqs) {
    fs.writeFileSync(
        FAQ_FILE,
        JSON.stringify(faqs, null, 2)
    );
}


// ===============================
// FAQ MATCHING
// ===============================

function cleanWords(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => word.length >= 3);
}


function findBestAnswer(question, faqs) {

    const questionWords = cleanWords(question);

    let bestFaq = null;
    let bestScore = 0;

    for (const faq of faqs) {

        let score = 0;

        for (const keyword of faq.keywords) {

            const keywordWords = cleanWords(keyword);

            for (const questionWord of questionWords) {

                for (const keywordWord of keywordWords) {

                    if (questionWord === keywordWord) {
                        score += 2;
                    }

                    else if (
                        questionWord.length >= 5 &&
                        keywordWord.length >= 5 &&
                        (
                            questionWord.startsWith(keywordWord) ||
                            keywordWord.startsWith(questionWord)
                        )
                    ) {
                        score += 1;
                    }
                }
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestFaq = faq;
        }
    }

    if (bestScore < 2) {
        return null;
    }

    return bestFaq;
}


// ===============================
// ADMIN AUTH
// ===============================

function requireAdmin(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Admin authentication required."
        });
    }

    const token = authHeader.replace("Bearer ", "");

    if (!adminTokens.has(token)) {
        return res.status(401).json({
            error: "Invalid or expired admin token."
        });
    }

    next();
}


// ===============================
// ADMIN LOGIN
// ===============================

app.post("/api/admin/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username !== ADMIN_USERNAME ||
        password !== ADMIN_PASSWORD
    ) {
        return res.status(401).json({
            success: false,
            message: "Invalid username or password."
        });
    }

    const token =
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    adminTokens.add(token);

    res.json({
        success: true,
        message: "Login successful.",
        token
    });
});


// ===============================
// ADMIN LOGOUT
// ===============================

app.post("/api/admin/logout", requireAdmin, (req, res) => {

    const authHeader = req.headers.authorization;
    const token = authHeader.replace("Bearer ", "");

    adminTokens.delete(token);

    res.json({
        success: true,
        message: "Logged out successfully."
    });
});


// ===============================
// FAQ CHAT API
// ===============================

app.post("/api/faq", (req, res) => {

    try {

        const { question } = req.body;

        if (!question || !question.trim()) {
            return res.status(400).json({
                error: "Please enter a question."
            });
        }

        const faqs = loadFAQs();

        const foundFAQ = findBestAnswer(
            question.trim(),
            faqs
        );

        if (foundFAQ) {
            return res.json({
                answer: foundFAQ.answer
            });
        }

        return res.json({
            answer: "Sorry, I couldn’t find an answer to that question."
        });

    } catch (error) {

        console.error("FAQ API error:", error);

        res.status(500).json({
            error: "Internal server error."
        });
    }
});


// ===============================
// GET ALL FAQS
// ===============================

app.get("/api/faqs", (req, res) => {

    try {

        const faqs = loadFAQs();

        res.json(faqs);

    } catch (error) {

        console.error("GET FAQ error:", error);

        res.status(500).json({
            error: "Could not load FAQs."
        });
    }
});


// ===============================
// ADD FAQ
// ===============================

app.post("/api/faqs", requireAdmin, (req, res) => {

    try {

        const { question, keywords, answer } = req.body;

        if (
            !question ||
            !keywords ||
            !answer
        ) {
            return res.status(400).json({
                error: "Question, keywords and answer are required."
            });
        }

        const faqs = loadFAQs();

        const newFAQ = {
            id: Date.now(),
            question,
            keywords: Array.isArray(keywords)
                ? keywords
                : keywords
                    .split(",")
                    .map(k => k.trim())
                    .filter(Boolean),
            answer
        };

        faqs.push(newFAQ);

        saveFAQs(faqs);

        res.json({
            success: true,
            faq: newFAQ
        });

    } catch (error) {

        console.error("ADD FAQ error:", error);

        res.status(500).json({
            error: "Could not add FAQ."
        });
    }
});


// ===============================
// UPDATE FAQ
// ===============================

app.put("/api/faqs/:id", requireAdmin, (req, res) => {

    try {

        const id = Number(req.params.id);

        const { question, keywords, answer } = req.body;

        const faqs = loadFAQs();

        const index = faqs.findIndex(
            faq => Number(faq.id) === id
        );

        if (index === -1) {
            return res.status(404).json({
                error: "FAQ not found."
            });
        }

        faqs[index] = {
            ...faqs[index],
            question,
            keywords: Array.isArray(keywords)
                ? keywords
                : keywords
                    .split(",")
                    .map(k => k.trim())
                    .filter(Boolean),
            answer
        };

        saveFAQs(faqs);

        res.json({
            success: true,
            faq: faqs[index]
        });

    } catch (error) {

        console.error("UPDATE FAQ error:", error);

        res.status(500).json({
            error: "Could not update FAQ."
        });
    }
});


// ===============================
// DELETE FAQ
// ===============================

app.delete("/api/faqs/:id", requireAdmin, (req, res) => {

    try {

        const id = Number(req.params.id);

        const faqs = loadFAQs();

        const newFaqs = faqs.filter(
            faq => Number(faq.id) !== id
        );

        if (newFaqs.length === faqs.length) {
            return res.status(404).json({
                error: "FAQ not found."
            });
        }

        saveFAQs(newFaqs);

        res.json({
            success: true,
            message: "FAQ deleted successfully."
        });

    } catch (error) {

        console.error("DELETE FAQ error:", error);

        res.status(500).json({
            error: "Could not delete FAQ."
        });
    }
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(
        `FAQ SERVER running on http://localhost:${PORT}`
    );

});