/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    }
    let minLength = Infinity;

    for (const str of strs) {
        minLength = Math.min(minLength, str.length);
    }

    let low = 1;
    let high = minLength;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1
        }
    }
    return strs[0].substring(0, Math.floor((low + high) / 2));
};

function isCommonPrefix(strs, len) {
    let firstStr = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(firstStr)) {
            return false
        }
    }
    return true;
}