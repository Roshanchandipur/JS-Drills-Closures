function counterFactory() {
    let counter = 0;
    function increment(numberOfIncrements) {
        for (let i = 0; i < numberOfIncrements; i++)
            counter += 1;
        return counter;
    }

    function decrement(numberOfDecrements) {
        for (let i = 0; i < numberOfDecrements; i++)
            counter -= 1;
        return counter;
    }

    return {
        increment: increment,
        decrement: decrement
    };
}

module.exports = counterFactory;