import * as nodemailer from 'nodemailer'

const sendMail = async ({ from, to, subject, html }) => {
  // Create a transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.SMTP_USER, // your Gmail account
      pass: process.env.SMTP_PASSWORD      // your app password generated above
    }
  });

  // Define your mail options (sender, receiver, content)
  const mailOptions = {
    from: `"no-reply" <${from}>`,
    to,
    subject,
    html,
  }

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error occurred: ' + error.message)
    }
    console.log('Email sent: ' + info.response)
  })
}

export { sendMail }