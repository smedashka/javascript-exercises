function removeFromArray(arr, ...args) {
    for (let arg of args) {
        arr = arr.filter((item) => item !== arg);
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;