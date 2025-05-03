const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

dotenv.config();

app.use(express.json());

app.post("/user/generateToken", (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    email: "test@gmail.com",
  };

  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.get("/user/validateToken", (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    let token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully verified");
    } else {
      return res.status(401).send(error);
    }
  } catch (e) {
    return res.status(401).send(e);
  }
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running at http://localhost:${process.env.PORT}`);
});
