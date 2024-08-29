const { johnName, peterName } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");
sayHi("Tayyab");
sayHi(johnName);
sayHi(peterName);
sayHi(data.items[0]);
sayHi(data.items[1]);
sayHi(data.singlePerson.name);
