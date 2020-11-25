const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const authRouter = require("./routers/auth");
app.use("/", authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
