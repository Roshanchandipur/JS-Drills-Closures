const cacheFunction =  require("../cacheFunction");

function cb(n) {
    return n * n;
}

const result = cacheFunction(cb);
console.log(result(3));
console.log(result(4));
console.log(result(3));