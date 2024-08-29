const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("Reading files=>", first, second);

writeFileSync(
  "./content/result-sync.txt",
  `This is the new result file content : ${first} ,${second}`,
  { flag: "a" }
);
