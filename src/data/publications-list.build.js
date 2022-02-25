const path = require("path");
const fs = require("fs");
const { Cite } = require("@citation-js/core");
require("@citation-js/plugin-bibtex");

const publicationsPath = "./src/pages/publications";
const pdfFilesPath = "./static/pdf";

const citeOpts = {
  forceType: "@bibtex/text",
  generateGraph: false,
};

const fileReadOpts = {
  encoding: "utf8",
  flag: "r",
};

function sortPapers(a, b) {
  const aDate = a.issued["date-parts"][0];
  const bDate = b.issued["date-parts"][0];

  const comp1 = aDate > bDate;
  if (comp1) return -1;

  const comp2 = aDate < bDate;
  if (comp2) return 1;

  return 0;
}

function parseBibFile(filename) {
  const filepath = path.resolve(publicationsPath, filename);
  const content = fs.readFileSync(filepath, fileReadOpts);

  return new Cite(content, citeOpts).get();
}

function groupPapersByYear(papers) {
  const pdfFiles = new Set(fs.readdirSync(pdfFilesPath));

  const groupedPapers = [];
  papers.forEach((paper) => {
    const year = paper.issued["date-parts"][0][0];
    let yearPapers = groupedPapers[groupedPapers.length - 1];
    if (!yearPapers || yearPapers.year != year) {
      yearPapers = { year };
      groupedPapers.push(yearPapers);
    }

    let typePapers = yearPapers[paper.type];
    if (!typePapers) {
      typePapers = [];
      yearPapers[paper.type] = typePapers;
    }
    const bibtex = new Cite(paper, {
      output: {
        type: "string",
        style: "bibtex",
      },
    })
      .get()
      .trim();

    const has_pdf = pdfFiles.has(paper.id + ".pdf");
    typePapers.push({
      id: paper.id,
      title: paper.title,
      authors: paper.author,
      venue: paper["container-title"],
      bibtex: bibtex,
      has_pdf: has_pdf,
      year: year,
    });
  });

  return groupedPapers;
}

module.exports = (options, loaderContext) => {
  const fileNames = fs
    .readdirSync(publicationsPath)
    .filter((file) => path.extname(file) === ".bib");

  const papers = fileNames.map(parseBibFile).flat().sort(sortPapers);
  const groupedPapers = groupPapersByYear(papers);

  return { code: `module.exports = ${JSON.stringify(groupedPapers)}` };
};
