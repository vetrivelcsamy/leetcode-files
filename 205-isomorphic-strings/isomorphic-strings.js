/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sHashmap = {};
    let tHashmap = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sHashmap[charS] === undefined) {
            sHashmap[charS] = charT
        } else if (sHashmap[charS] !== charT) {
            return false;
        }

        if (tHashmap[charT] === undefined) {
            tHashmap[charT] = charS
        } else if (tHashmap[charT] !== charS) {
            return false;
        }
    }
    return true;
};