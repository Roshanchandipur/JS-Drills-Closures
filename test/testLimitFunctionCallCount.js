const limitFunctionCallCount = require("../limitFunctionCallCount");

function cb(n) {
    console.log(n);
}

const result = limitFunctionCallCount(cb, 4);
result();
result();
result();
result();
result();