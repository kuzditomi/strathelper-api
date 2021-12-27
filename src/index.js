const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello, strathelper");
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});