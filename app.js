require("dotenv").config();
const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use SSL - TLS
      auth: {
        user: process.env.EMAIL,
        pass: process.env.Pass,
      },
    });
    const mailOptions = {
      from: "muhrais791@gmail.com",
      to: "risusanto@outlook.com",
      subject: "Submission: Chapter-9 Challenge#<Rais>"
      ,
      html: "Favorite Song: imagine by john lennon | link github: https://github.com/raisadiakbar/challenge-9.git"
      ,
    };
    return transporter.sendMail(mailOptions); // promise
 

//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) throw err;
//     console.log('Email sent: ' + info.response);
// });
