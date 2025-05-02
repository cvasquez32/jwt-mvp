const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
