import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// console.log("User Mail: ", process.env.GMAIL_USER);
// console.log("Rohan Mail: ", process.env.ROHAN_MAIL);

const mailOptions = {
    from: "Test Email",
    to: "pandacodes18@gmail.com",
    subject: "First Email!",
    text: "Hi. My first email using node mailer",
  };

  function convertClientDetailsToHTML(clientDetails) {
    const { Name, Number, LoanType, LoanAmount, Email } = clientDetails;
  
    return `
      <h1>Client Details</h1>
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Number:</strong> ${Number}</p>
      ${LoanType ? `<p><strong>Loan Type:</strong> ${LoanType}</p>` : ""}
      ${LoanAmount ? `<p><strong>Loan Amount:</strong> ${LoanAmount}</p>` : ""}
      ${Email ? `<p><strong>Email:</strong> ${Email}</p>` : ""}
    `;
  }

export const sendClientDetails  = (mailMessage) => {

    const htmlContent = convertClientDetailsToHTML(mailMessage);

    const mailOptions = {
        from: `"Shree Gajanan Loan Services" <${process.env.EMAIL_USER}>`,
        to: process.env.ROHAN_MAIL,
        subject: "Client Details",
        // text: mailMessage,
        html: htmlContent,
      };
      
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error While Sending Mail: ");
            throw error;
        } else {
          console.log("Email sent: " + info.response);
        }
    });
}
