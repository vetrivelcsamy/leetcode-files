/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let romanToInteger = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  let result = 0;
  let index = 0;

  while(index < s.length){
   const currentIdx = romanToInteger[s[index]];
   const nextIdx = romanToInteger[s[index + 1]];

   if(nextIdx && currentIdx < nextIdx){
     result += nextIdx - currentIdx;
     index += 2;   
   } else{
     result += currentIdx;
     index++; 
   }
  }

  return result;
};