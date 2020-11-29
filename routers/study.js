const { Router } = require("express");
const router = new Router();

const Study = require("../models").study;
const Review = require("../models").review;

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
    include: [Review],
  });

  if (study === null) {
    return res.status(404).send({ message: "Study not Found" });
  }
  res.status(200).send({ message: "ok", study });
});

module.exports = router;
