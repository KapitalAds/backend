import { Request, Response } from "express";
import { Contact } from "../entity/Contact";
import { AppDataSource } from "../data-source";
import { sendMail } from "../core/mailer";

const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, company, website, subject, message } = req.body
    console.log(req.body)
    const contact = new Contact()
    contact.name = name
    contact.email = email
    contact.phone = phone
    contact.company = company
    contact.website = website
    contact.subject = subject
    contact.message = message

    await sendMail({
      from: email,
      to: 'rafaprofi4@gmail.com',
      subject,
      html: '<div>This is test</div>'
    })

    await AppDataSource.manager.save(contact)
    res.status(200).json({ result: true })

  } catch (err) {
    res.status(500).json({ result: false, message: err.message })
  }
}

export {
  sendContactEmail
}