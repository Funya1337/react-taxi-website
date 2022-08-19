const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer")
require('dotenv').config()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello world!")
})

app.post("/api/invest", async (req, res) => {
  const output = `
  <p>Новое предложение об инвистициях</p>
  <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Телефон: ${req.body.phone}</li>
      <li>Промокод: ${req.body.promo}</li>
    </ul>
  `
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const msg = {
    from: `"RussoTaxi 👻" <${process.env.EMAIL_USERNAME}>`,
    to: "gta7654@gmail.com",
    subject: "RussoTaxi Contact Info",
    text: "hello",
    html: output,
  }

  let info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  console.log(req.body)
  res.send(req.body)
})

app.post("/api/request", async (req, res) => {

  const output = `
    <p>Новое подключение</p>
    <h3>Контактные данные</h3>
    <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Телефон: ${req.body.phone}</li>
      <li>Почта: ${req.body.email}</li>
      <li>Город: ${req.body.city}</li>
    </ul>
    <h3>Водительское удостоверение</h3>
    <ul>
      <li>Серия и номер: ${req.body.carNumber}</li>
      <li>Дата выдачи: ${req.body.carDateStart}</li>
      <li>Дата окончания: ${req.body.carDateEnd}</li>
    </ul>
    <h3>Автомобиль</h3>
    <ul>
      <li>Марка: ${req.body.carBrand}</li>
      <li>Модель: ${req.body.carModel}</li>
      <li>Цвет: ${req.body.carColor}</li>
      <li>Гос.номер: ${req.body.carGosNumber}</li>
      <li>Год выпуска: ${req.body.CarReleaseDate}</li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const msg = {
    from: `"RussoTaxi 👻" <${process.env.EMAIL_USERNAME}>`,
    to: "gta7654@gmail.com",
    subject: "RussoTaxi Contact Info",
    text: "hello",
    html: output,
  }

  let info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  console.log(req.body)
  res.send(req.body)
})

app.listen(8080, () => {console.log("api app started!")})