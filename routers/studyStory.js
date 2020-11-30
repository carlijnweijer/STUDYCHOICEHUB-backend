const { Router } = require("express");
const router = new Router();

const StudyStory = require("../models").studyStory;

router.post("/upload/studystory", async (req, res) => {
  const { video, studyId, userId } = req.body;

  try {
    const newStory = await StudyStory.create({
      video,
      userId,
      studyId,
    });

    console.log("newstory", newStory);
    res.status(201);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/studystories", async (req, res) => {
  try {
    const studystories = await StudyStory.findAll();
    res.send(studystories);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
