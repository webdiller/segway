import nodemailer from "nodemailer";
export default async function handler(req, res) {
  
  const { formFromOtherModelsName, formFromOtherModelsPhone } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "eugenefromrus@gmail.com",
      pass: process.env.GMAIL_SERVICE_PASS
    }
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "eugenefromrus@gmail.com",
    to: process.env.EMAIL_SEND_TO,
    subject: `Заявка с сайта segway.com`,
    html: `
      <p>Заявка с сайта segway.com</p>
      <p>Имя пользователя: ${formFromOtherModelsName || 'Не указано'}</p>
      <p>Телефон пользователя: ${formFromOtherModelsPhone}</p>
    `
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        res.status(200).json({ status: "NOT OK" });
        reject(err);
      } else {
        res.status(200).json({ status: "OK" });
        resolve(info);
      }
    });
  });

}
