/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let hashmap = {};

    for (let i = 0; i < s.length; i++) {
        hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
    }

    let pairs = Object.entries(hashmap);
    // Sort the array based on frequencies in descending order
    pairs.sort((a, b) => b[1] - a[1]);

    let str = "";

    for (let pair of pairs) {
        str += pair[0].repeat(pair[1]);
    }

    return str;
};