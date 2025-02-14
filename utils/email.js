const sgMail = require("@sendgrid/mail")
const handlebars = require("handlebars")
const fs = require("fs")
const path = require("path")
const { AuthSuccess, AuthFailure } = require("../files/auth/auth.messages")
const mailer = require("nodemailer")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

handlebars.registerHelper("eq", (a, b) => a == b)

const sendMailNotification = (
  to_email,
  subject,
  substitutional_parameters,
  Template_Name,
  is_save
) => {
  const source = fs.readFileSync(
    path.join(__dirname, `../templates/${Template_Name}.hbs`),
    "utf8"
  )

  const compiledTemplate = handlebars.compile(source)
  // const email = new Promise((resolve, reject) => {
  // const msg = {
  //   from: {
  //     name: "WhoUEpp",
  //     email: process.env.COMPANY_EMAIL,
  //   },
  //   to: to_email,
  //   subject: subject,
  //   html: compiledTemplate(substitutional_parameters),
  // }

  // return sgMail
  //   .send(msg)
  //   .then(() => {
  //     return resolve(true)
  //   })
  //   .catch((error) => {
  //     if (error) {
  //       return reject(error)
  //     }
  //   })

  // return email
  //   .then((data) => {
  //     return {
  //       success: true,
  //       msg: AuthSuccess.EMAIL,
  //       data,
  //     }
  //   })
  //   .catch((error) => {
  //     return {
  //       success: false,
  //       msg: AuthFailure.EMAIL,
  //       data: error,
  //     }
  //   })

  //smtp
  return new Promise((resolve, reject) => {
    let smtpProtocol = mailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_APP,
        pass: process.env.GMAIL_APP_KEY,
      },
    })

    var mailoption = {
      from: process.env.COMPANY_EMAIL,
      to: to_email,
      subject: subject,
      html: compiledTemplate(substitutional_parameters),
    }

    return smtpProtocol.sendMail(mailoption, function (err, response) {
      if (err) {
        return reject(err)
      }
      console.log("Message Sent" + response)
      smtpProtocol.close()
      return resolve(true)
    })
  })
}

const sendMultiEmailNotification = (
  to_emails,
  subject,
  substitutional_parameters,
  Template_Names,
  is_save,
  whoIAm = "User"
) => {
  for (let index = 0; index < to_emails.length; index++) {
    const to_email = to_emails[index]
    const template_name = Template_Names[index]
    sendMailNotification(
      to_email,
      subject,
      substitutional_parameters,
      template_name,
      is_save ? index : 0,
      whoIAm
    )
  }
}

module.exports = { sendMailNotification, sendMultiEmailNotification }
