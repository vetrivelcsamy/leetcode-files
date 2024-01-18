/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let hayStackLength = haystack.length;
    let needleLength = needle.length;

    for (let windowStart = 0; windowStart <= hayStackLength - needleLength; windowStart++) {
        for (let i = 0; i < needleLength; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break;
            }
            if (i === needleLength - 1) {
                return windowStart
            }
        }
    }
    return -1
};