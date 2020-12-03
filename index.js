const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

const studyRouter = require("./routers/study");
const authRouter = require("./routers/auth");
const storyRouter = require("./routers/studyStory");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authRouter);

app.use("/", studyRouter);

app.use("/", storyRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
