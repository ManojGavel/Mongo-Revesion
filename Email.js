const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Admin <manojgavel@gmail.com>",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };
  await transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

module.exports = sendEmail;
