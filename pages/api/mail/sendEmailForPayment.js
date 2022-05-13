import nodemailer from "nodemailer";
export default async function handler(req, res) {

  const { products, contracts } = req.body;

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

  let attachments = []
  if (contracts && products) {
    attachments = [
      {
        filename: 'products.json',
        content: JSON.stringify(products)
      },
      {
        filename: 'contracts.json',
        content: JSON.stringify(contracts)
      }
    ]
  } else {
    attachments = [
      {
        filename: 'products.json',
        content: JSON.stringify(products)
      }
    ]
  }

  const mailData = {
    from: "eugenefromrus@gmail.com",
    to: process.env.EMAIL_SEND_TO,
    subject: `Оплаченные продукты`,
    html: `
      <h1>Оплаченные продукты</h1>
    `,
    attachments: attachments
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
