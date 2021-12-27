const dotenv = require("dotenv")
dotenv.config()

const express = require('express');
const cors = require('cors');
const { getOptionChain } = require('./tosservice');

const app = express();

const port = process.env.PORT || 3001;
console.log({ port });

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello, strathelper");
});

app.get('/price', async (req, res) => {
  const ticker = req.query.ticker;

  const chain = await getOptionChain(ticker);

  res.send(chain);
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});