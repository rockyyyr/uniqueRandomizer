let trackingPools = {}

/**
 * Return a unique random number from a pool.
 * If the specified pool doesn't exist, it is created
 * with the max parameter specifying its maximum possible value.
 *
 * @param pool the specified pool
 * @param max the max value of the newly created pool
 * @returns {number} a unique random number per pool
 */
function getUniqueNumber(pool, max){
    if(!trackingPools[pool]) {
        trackingPools[pool] = buildArray(max)
    }
    return trackingPools[pool].pop()
}


/**
 * Shuffle an array of numbers
 *
 * @param array the array to be shuffled
 * @returns {number[]} the shuffled array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Build an array of a specified length and populate it
 * with incremented numbers starting at 0
 *
 * @param length the length of array to build
 * @returns {number[]} a populated array of specified length
 */
function buildArray(length){
    let array = []
    for(let i = 0; i < length; i++) {
        array.push(i)
    }
    return shuffle(array)
}

module.exports = {
    getUniqueNumber
}