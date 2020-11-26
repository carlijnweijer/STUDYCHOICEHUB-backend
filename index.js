const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const authRouter = require("./routers/auth");
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
