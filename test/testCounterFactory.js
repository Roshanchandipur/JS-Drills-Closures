const counterFactory = require("../counterFactory");

const result = counterFactory();
console.log(result.increment(5));
console.log(result.decrement(3));