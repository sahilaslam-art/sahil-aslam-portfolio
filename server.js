import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log('✅ Server starting...');
console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASSWORD exists:', !!process.env.GMAIL_PASSWORD);

const app = express();

// Configure CORS to allow Vercel frontend
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://sahil-aslam-portfolio.vercel.app',
    'https://sahil-aslam-portfolio.netlify.app',
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD, // Use App Password, not regular password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Email to you
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'sahilaslam754@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for your inquiry!',
      html: `
        <h2>Hello ${name}!</h2>
        <p>Thank you for reaching out. I've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Sahil Aslam</p>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
