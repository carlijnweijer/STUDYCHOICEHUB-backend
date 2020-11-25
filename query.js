const Study = require("./models").study;
const studies = require("./crohoStudy.json");
const studies2 = require("./crohoStudy2.json");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createStudy({ crohoSector, isCurrent, rowkey, titleEn, titleNL }) {
  try {
    return Study.create({
      crohoSector,
      isCurrent,
      rowkey,
      titleEn,
      titleNL,
    });
    // return newStudy.get({ plain: true });
  } catch (error) {
    console.log(error);
  }
}

function createStudies() {
  const result = studies2.map((study) => {
    return createStudy({
      crohoSector: study.crohoSector,
      isCurrent: study.isCurrent,
      rowkey: study.rowkey,
      titleEn: study.title.en,
      titleNL: study.title.nl,
    });
  });
  try {
    const done = Promise.all(result);
    console.log(done);
  } catch (error) {
    console.log(error);
  }
}

createStudies();
// console.log(studies);
