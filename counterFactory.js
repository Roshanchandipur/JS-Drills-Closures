function counterFactory() {
    let counter = 0;
    function increment(numberOfIncrements) {
        counter += numberOfIncrements;
        return counter;
    }

    function decrement(numberOfDecrements) {
        counter -= numberOfDecrements;
        return counter;
    }

    return {
        increment: increment,
        decrement: decrement
    };
}

module.exports = counterFactory;