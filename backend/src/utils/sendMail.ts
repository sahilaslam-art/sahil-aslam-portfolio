import nodemailer from "nodemailer";

const sendMail = async (
  name: string,
  email: string,
  message: string
): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Hire Me Enquiry",
    html: `
      <h2>New Enquiry Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `
  });
};

export default sendMail;
