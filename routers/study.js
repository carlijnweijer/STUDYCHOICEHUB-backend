const { Router } = require("express");
const question = require("../models/question");
const router = new Router();

const Study = require("../models").study;
const Review = require("../models").review;
const StudyStory = require("../models").studyStory;
const Question = require("../models").question;
const Answer = require("../models").answer;
const User = require("../models").user;

router.get("/studies", async (req, res) => {
  const limit = Math.min(req.query.limit || 20);
  const offset = req.query.offset || 5;

  try {
    const studies = await Study.findAll({ limit, offset });
    res.send(studies);
  } catch (error) {
    console.log(error);
  }
});

router.get("/studies/:sector", async (req, res) => {
  const { sector } = req.params;
  const limit = Math.min(req.query.limit || 6);
  const offset = req.query.offset || 5;

  console.log("what is sector", sector);
  try {
    const studies = await Study.findAll({
      limit,
      offset,
      where: {
        crohoSector: sector,
      },
    });
    res.send(studies);
  } catch (error) {
    console.log(error);
  }
});

router.get("/study/:id", async (req, res) => {
  const { id } = req.params;

  console.log("what is study id", id);
  const study = await Study.findByPk(id, {
    include: [Review, StudyStory],
  });

  if (study === null) {
    return res.status(404).send({ message: "Study not Found" });
  }
  res.status(200).send({ message: "ok", study });
});

router.post("/study/:id/questions/ask", async (req, res) => {
  const { id } = req.params;
  const { content, userId } = req.body;

  try {
    const newQuestion = await Question.create({
      id,
      content,
      userId,
    });

    console.log(newQuestion);
    res.status(201);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/study/:id/questions", async (req, res) => {
  const { id } = req.params;

  try {
    const questions = await Question.findAll({
      where: {
        studyId: id,
      },
      include: [Answer, User],
    });
    res.send(questions);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
