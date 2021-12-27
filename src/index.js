const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;
console.log({ port });

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello, strathelper");
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});