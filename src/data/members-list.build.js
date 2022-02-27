const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");

const pageExtension = ".mdx";
const fileReadOpts = {
  encoding: "utf8",
  flag: "r",
};

function parseMemberPage(filename) {
  const filepath = path.resolve("./src/pages/members", filename);
  const content = fs.readFileSync(filepath, fileReadOpts);
  const member = matter(content).data;

  if (!member.role) {
    member.role = "Visitor";
  }

  member.start_date =
    member.start_date && new Date(member.start_date.toString());
  member.end_date = member.end_date && new Date(member.end_date.toString());

  let category = `${member.role[0].toUpperCase()}${member.role.slice(1)}s`;
  const isAlumni = !!member.end_date;
  if (isAlumni && category !== "Visitors") {
    category = "Alumni";
  }

  if (!member.name) member.name = member.title;
  member.id = path.basename(filename, pageExtension);
  if (member.id[0] === "_") {
    member.id = member.id.slice(1);
  } else {
    member.has_page = true;
  }
  member.category = category;

  return member;
}

function sortMembersByCategory(a, b) {
  if (a.category === b.category) return 0;
  return a.category > b.category ? 1 : -1;
}

const categoriesOrder = {
  Professors: 1,
  "Postdoctoral Researchers": 2,
  "PhD Students": 3,
  "Masters Students": 4,
  "Undergraduate Students": 5,
  Alumni: 6,
  Visitors: 7,
};

const rolesOrder = {
  Professor: 1,
  "Postdoctoral Researcher": 2,
  "PhD Student": 3,
  "Masters Student": 4,
  "Undergraduate Student": 5,
};

function sortCategories(a, b) {
  if (a.title === b.title) return 0;
  return categoriesOrder[a.title] > categoriesOrder[b.title] ? 1 : -1;
}

function sortMembers(a, b) {
  if (a.role != b.role) {
    return  rolesOrder[a.role] > rolesOrder[b.role] ? 1 : -1;
  }
  if (a.end_date > b.end_date) return -1;
  if (a.end_date < b.end_date) return 1;
  if (a.start_date > b.start_date) return 1;
  if (a.start_date < b.start_date) return -1;
  return 0;
}

module.exports = (options, loaderContext) => {
  const fileNames = fs
    .readdirSync("./src/pages/members")
    .filter((file) => path.extname(file) == pageExtension);

  const categories = [];
  fileNames
    .map(parseMemberPage)
    .sort(sortMembersByCategory)
    .forEach((member) => {
      let lastCategory = categories[categories.length - 1];
      if (!lastCategory || lastCategory.title !== member.category) {
        lastCategory?.members.sort(sortMembers);
        categories.push({
          title: member.category,
          members: [member],
        });
      } else {
        lastCategory.members.push(member);
      }
    });

  categories.sort(sortCategories);

  return { code: `module.exports = ${JSON.stringify(categories)}` };
};
