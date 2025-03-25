const repeatString = function(s, num) {
    let res = '';
    if (num < 0) return 'ERROR';

    for (let i = 0; i < num; i++) {
        res += s;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
