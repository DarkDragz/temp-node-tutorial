const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Got Error :", err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("Got Error :", err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is teh async result : ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log("Write error :", err);
          return;
        }
        console.log(result);
      }
    );
  });
});
