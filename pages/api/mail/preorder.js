import nodemailer from "nodemailer";
export default async function handler(req, res) {

  const { productName, productLink, userEmail } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "eugenefromrus@gmail.com",
      pass: process.env.GMAIL_SERVICE_PASS
    }
  });

  let userAddress;
  try {
    const userAddressRes = await fetch('https://api.ipregistry.co/?key=gv4hieouxum6rrfl')
    userAddress = await userAddressRes.json();
    userAddress = `${userAddress.location.country.name}, ${userAddress.location.city}`
  } catch (error) {
    console.log(error);
  }

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
    subject: `Предзаказ с сайта segway.com`,
    html: `
      <h1>Предзаказ с сайта segway.com</h1>
      <p>Название модели: ${productName}</p>
      <p>Страница модели: ${productLink}</p>
      <p>Email пользователя: ${userEmail}</p>
      <p>Страна / регион пользователя: ${userAddress || 'Не указано'}</p>
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
