const nodemailer = require('nodemailer')
require("dotenv").config();

exports.verifyEmail = async(email,link,firstName) =>{
  try {
    let transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.Auth_EMAIL,
            pass: process.env.Auth_PASS
          }
        });
        await transport.sendMail({
          to: email,
          subject: 'Email Confimation',
          html:`<p>Hello ${firstName}</p>
          <div>
              <a href="${link}">Click Here To Verify Your Email</a>
          </div>
      `
      })
  } catch (error) {
    console.log(error);
  }

}

exports.ResetPasswordEmail = async(email,link,firstName) =>{
  let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.Auth_EMAIL,
        pass: process.env.Auth_PASS
      }
    });
  
    await transport.sendMail({
      to: email,
      subject: 'Password Reset',
      html:`
      <div>
      <p>Hello ${firstName}</p>
          <a href="${link}">Click Here To Reset Your Password</a>
      </div>`
  })
  }

