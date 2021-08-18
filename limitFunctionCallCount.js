function limitFunctionCallCount(cb, n) {

    function callBack() {
        if (n > 0) {
            cb(n);
            n -= 1;
        }
    }
    return callBack;
}

module.exports = limitFunctionCallCount;