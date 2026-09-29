const faqs = [

    // =========================
    // ACCOUNT
    // =========================

    {
        keywords: ["username", "change username", "update username", "new username"],
        answer: "Go to Settings > Account > Username and enter your new username."
    },

    {
        keywords: ["email", "change email", "update email", "new email"],
        answer: "Go to Settings > Account > Email and enter your new email address."
    },

    {
        keywords: ["phone", "phone number", "mobile number", "change phone"],
        answer: "Go to Settings > Account > Phone Number and update your phone number."
    },

    {
        keywords: ["delete account", "remove account", "close account"],
        answer: "Go to Settings > Account > Delete Account and follow the instructions."
    },

    {
        keywords: ["profile", "edit profile", "update profile"],
        answer: "Go to Settings > Account > Profile to update your profile information."
    },

    {
        keywords: ["account settings", "settings", "account"],
        answer: "Open Settings to manage your account, security, notifications, payments, and other preferences."
    },


    // =========================
    // PASSWORD & LOGIN
    // =========================

    {
        keywords: ["password", "forgot password", "reset password", "recover password"],
        answer: "Go to Settings > Security > Reset Password and follow the instructions."
    },

    {
        keywords: ["login", "log in", "sign in", "login problem"],
        answer: "Check your email and password, then try signing in again. If you forgot your password, use the Reset Password option."
    },

    {
        keywords: ["logout", "log out", "sign out"],
        answer: "Open your account menu and select Log Out."
    },

    {
        keywords: ["locked account", "account locked", "locked"],
        answer: "Your account may be temporarily locked after multiple unsuccessful login attempts. Wait a few minutes and try again."
    },

    {
        keywords: ["verification", "verify account", "verification email"],
        answer: "Check your email for the verification message and follow the verification link."
    },

    {
        keywords: ["two factor", "2fa", "two step verification"],
        answer: "Go to Settings > Security and enable Two-Factor Authentication."
    },


    // =========================
    // SECURITY
    // =========================

    {
        keywords: ["security", "account security", "secure account"],
        answer: "Go to Settings > Security to review your account security options."
    },

    {
        keywords: ["suspicious login", "unknown login", "login alert"],
        answer: "Change your password immediately and review your recent account activity in Settings > Security."
    },

    {
        keywords: ["hack", "hacked account", "account hacked"],
        answer: "Change your password immediately and contact support if you believe your account has been compromised."
    },


    // =========================
    // PAYMENTS
    // =========================

    {
        keywords: ["payment", "pay", "payment method"],
        answer: "Go to Settings > Payments to add or update your payment method."
    },

    {
        keywords: ["credit card", "debit card", "card"],
        answer: "Go to Settings > Payments to add, remove, or update your card."
    },

    {
        keywords: ["payment failed", "failed payment", "payment error"],
        answer: "Check your card details and available balance, then try the payment again."
    },

    {
        keywords: ["payment pending", "pending payment"],
        answer: "A pending payment may take some time to complete. Check your payment history for the latest status."
    },

    {
        keywords: ["payment history", "transaction history", "transactions"],
        answer: "Go to Settings > Payments > Payment History to view your previous transactions."
    },


    // =========================
    // ORDERS
    // =========================

    {
        keywords: ["order", "orders", "track order", "order status"],
        answer: "Go to Orders and select your order to view its current status."
    },

    {
        keywords: ["where is my order", "order location", "delivery status"],
        answer: "Open Orders and select the relevant order to view the latest delivery information."
    },

    {
        keywords: ["cancel order", "cancel my order", "order cancellation"],
        answer: "Go to Orders, select the order, and choose Cancel Order if cancellation is still available."
    },

    {
        keywords: ["order history", "previous orders", "old orders"],
        answer: "Go to Orders to view your previous and current orders."
    },

    {
        keywords: ["wrong order", "incorrect order", "wrong item"],
        answer: "Contact support with your order number and explain the issue with the received item."
    },


    // =========================
    // REFUNDS
    // =========================

    {
        keywords: ["refund", "money back", "refund payment"],
        answer: "Go to Orders, select the relevant order, and choose the Refund option if available."
    },

    {
        keywords: ["refund status", "refund pending", "pending refund"],
        answer: "Check the order's refund status in Orders. Refund processing time may vary depending on the payment method."
    },

    {
        keywords: ["refund not received", "missing refund"],
        answer: "Check your payment account and refund status. If the refund is still missing, contact support with your order details."
    },


    // =========================
    // DELIVERY
    // =========================

    {
        keywords: ["delivery", "delivery time", "when delivery"],
        answer: "You can view the estimated delivery date by opening the relevant order."
    },

    {
        keywords: ["late delivery", "delivery late", "delayed delivery"],
        answer: "Check your order tracking information for the latest update. Contact support if the delivery remains delayed."
    },

    {
        keywords: ["delivery address", "change address", "shipping address"],
        answer: "Open your order and check whether the delivery address can still be changed."
    },


    // =========================
    // NOTIFICATIONS
    // =========================

    {
        keywords: ["notification", "notifications", "alerts"],
        answer: "Go to Settings > Notifications to manage your notification preferences."
    },

    {
        keywords: ["email notifications", "email alerts"],
        answer: "Go to Settings > Notifications to enable or disable email notifications."
    },

    {
        keywords: ["push notifications", "push alerts"],
        answer: "Go to Settings > Notifications and manage your push notification settings."
    },


    // =========================
    // LANGUAGE
    // =========================

    {
        keywords: ["language", "change language", "language settings"],
        answer: "Go to Settings > Language and select your preferred language."
    },


    // =========================
    // SUPPORT
    // =========================

    {
        keywords: ["support", "customer service", "contact support"],
        answer: "You can contact our support team by email."
    },

    {
        keywords: ["help", "need help", "get help"],
        answer: "You can search the FAQ or contact our support team for additional assistance."
    },

    {
        keywords: ["business hours", "working hours", "opening hours"],
        answer: "Our support team is available Monday to Friday, 9 AM to 6 PM."
    },

    {
        keywords: ["contact", "contact us", "support contact"],
        answer: "You can contact our support team by email during support hours."
    },


    // =========================
    // INTERNET & CONNECTION
    // =========================

    {
        keywords: ["wifi", "internet", "connection", "network"],
        answer: "Check your internet connection and try refreshing the page. If the problem continues, restart your network connection."
    },

    {
        keywords: ["offline", "connection lost", "no internet"],
        answer: "Check your internet connection and make sure your device is connected to the network."
    },


    // =========================
    // APP / WEBSITE
    // =========================

    {
        keywords: ["app", "application", "app problem"],
        answer: "Try closing and reopening the application. If the problem continues, check for available updates."
    },

    {
        keywords: ["website", "web page", "page not loading"],
        answer: "Try refreshing the page and checking your internet connection. You can also try another browser."
    },

    {
        keywords: ["slow", "slow website", "slow app"],
        answer: "Check your internet connection and try refreshing the application or webpage."
    },


    // =========================
    // DATA & PRIVACY
    // =========================

    {
        keywords: ["privacy", "privacy settings"],
        answer: "Go to Settings > Privacy to review your privacy options."
    },

    {
        keywords: ["personal data", "my data", "data"],
        answer: "You can review your account information and privacy options from Settings."
    },

    {
        keywords: ["data deletion", "delete data"],
        answer: "Contact support if you need assistance with deleting account data."
    },


    // =========================
    // PASSWORD CHANGE
    // =========================

    {
        keywords: ["change password", "update password", "new password"],
        answer: "Go to Settings > Security > Change Password and enter your new password."
    },


    // =========================
    // USER PREFERENCES
    // =========================

    {
        keywords: ["theme", "dark mode", "light mode"],
        answer: "Go to Settings > Appearance to choose your preferred theme."
    },

    {
        keywords: ["preferences", "user preferences", "preferences settings"],
        answer: "Go to Settings > Preferences to manage your personal options."
    }

];

export default faqs;
