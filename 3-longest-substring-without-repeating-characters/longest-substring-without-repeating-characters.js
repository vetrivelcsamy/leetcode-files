/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashmap = {};
    let longest = [0, 1];
    let startIdx = 0;

    // start iterate the string
    for(let i = 0; i < s.length; i++){
      const currentChar = s[i];

      if(currentChar in hashmap){
        startIdx = Math.max(startIdx, hashmap[currentChar] + 1);  
      }  

      if(longest[1] - longest[0] < i + 1 - startIdx){
        longest = [startIdx, i + 1];  
      }
      // update to hashmap
      hashmap[currentChar] = i;  
    }

    return s.slice(longest[0], longest[1]).length;
};