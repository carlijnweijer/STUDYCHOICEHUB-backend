const { Router } = require("express");
const router = new Router();

const Study = require("../models").study;
const Review = require("../models").review;
const StudyStory = require("../models").studyStory;
const Question = require("../models").question;
const Answer = require("../models").answer;
const User = require("../models").user;
const { Op } = require("sequelize");

router.get("/study", async (req, res) => {
  try {
    const study = await Study.findAll({
      where: { titleEn: { [Op.iLike]: req.query.title + "%" } },
    });
    res.send(study);
    console.log(study);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something went wrong, sorry", body: title });
  }
});

router.get("/studies", async (req, res) => {
  const limit = Math.min(req.query.limit || 8);
  const offset = req.query.offset || 10;

  try {
    const studies = await Study.findAll({ limit, offset });
    res.send(studies);
  } catch (error) {
    console.log(error);
  }
});

router.get("/studies/:sector", async (req, res) => {
  const { sector } = req.params;
  const limit = Math.min(req.query.limit || 20);
  const offset = req.query.offset || 20;

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
    include: [
      { model: Review, include: [{ model: User }] },
      { model: StudyStory },
      {
        model: Question,
        include: [
          { model: User },
          { model: Answer, include: [{ model: User }] },
        ],
      },
    ],
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
      content,
      userId,
      studyId: id,
    });

    console.log(newQuestion);
    res.status(201).send(newQuestion);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.send(reviews);
  } catch (error) {
    console.log(error);
  }
});

router.post("/study/:id/review", async (req, res) => {
  const { id } = req.params;
  const { content, userId, title } = req.body;

  try {
    const newReview = await Review.create({
      title,
      content,
      userId,
      studyId: id,
    });
    console.log(newReview);
    res.status(201).send(newReview);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/study/:id/questions/:questionId/answer", async (req, res) => {
  const { questionId } = req.params;
  const { content, userId } = req.body;

  try {
    const answer = await Answer.create({
      content,
      userId,
      questionId,
    });
    res.status(201).send(answer);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
