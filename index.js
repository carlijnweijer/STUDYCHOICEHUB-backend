const express = require("express");
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const studyRouter = require("./routers/study");
const authRouter = require("./routers/auth");
const storyRouter = require("./routers/studyStory");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authRouter);

app.use("/", studyRouter);

app.use("/", storyRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
