/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanToInt = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000  
  }

  let result = 0;
  let index = 0;

  while(index < s.length){
    const currentValue =  romanToInt[s[index]];
    const nextValue = romanToInt[s[index + 1]];

    if(nextValue && currentValue < nextValue){
      result += nextValue - currentValue;
      index += 2;  
    } else {
      result += currentValue;
      index++;
    }
  }
  return result;  
};