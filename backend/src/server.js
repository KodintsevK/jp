const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require("./db");
const router = require('./routes');

const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.json())
app.use(router);

app.listen(port, async () => {
  await connectDB();
  console.log(`Сервер работает на  ${port}`)
})