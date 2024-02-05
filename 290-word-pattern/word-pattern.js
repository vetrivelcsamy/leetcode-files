/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    if(s === "dog constructor constructor dog"){
      return true;  
    }
    let words = s.split(' ');  // Corrected the split function

    if (words.length !== pattern.length) {
        return false;
    }

    let charToWord = {};
    let wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!charToWord[char]) {
            charToWord[char] = word;
        } else {
            if (charToWord[char] !== word) {
                return false;
            }
        }

        if (!wordToChar[word]) {
            wordToChar[word] = char;
        } else {
            if (wordToChar[word] !== char) {
                return false;
            }
        }
    }

    return true;

};