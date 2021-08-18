function cacheFunction(cb) {
    let cache = {};
    function square(n) {
        if (cache[n] === undefined) {
            cache[n] = cb(n);
            return cache[n];
        }
        return cache[n];
    }
    return square;
}

module.exports = cacheFunction;