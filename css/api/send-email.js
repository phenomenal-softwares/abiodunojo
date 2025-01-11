const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        try {
            // Create a Nodemailer transporter
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAIL_USER, // Your Gmail address
                    pass: process.env.GMAIL_PASS, // Your Gmail app password
                },
            });

            // Email options
            const mailOptions = {
                from: email, // Sender email
                to: process.env.RECEIVER_EMAIL, // Your email address
                subject: `${subject} (from ${name})`,
                text: message,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send email. Try again later." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
