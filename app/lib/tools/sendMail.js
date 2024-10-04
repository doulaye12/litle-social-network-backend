const nodemailer = require('nodemailer');

exports.sendMail = async (email, subject, text) => {
   const transporter =  nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
         user: process.env.EMAIL,
         pass: process.env.EMAIL_PASSWORD,
      }
   });
   const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject,
      text
   }
   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         throw err;
      }else {
         console.log(info.response);
      }
   });
}
