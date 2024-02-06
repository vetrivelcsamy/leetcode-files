/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hashmap = new Map();

    for (let i = 0; i < strs.length; i++) {
        const str = reArrange(strs[i]);
        if (!hashmap.has(str)) {
            hashmap.set(str, []);
        }
        hashmap.get(str).push(strs[i]);
    }
    return Array.from(hashmap.values());
};

var reArrange = function (str) {
    return str.split('').sort().join('');
}