const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
console.log({ port });
app.get('/', (req, res) => {
  res.send("Hello, strathelper");
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});