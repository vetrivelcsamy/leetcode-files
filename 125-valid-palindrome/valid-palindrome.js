/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left =  0;
  let right = s.length - 1;

  while(left < right){
    while(left < right && !isValidChar(s[left])){
      left++  
    }

    while(left < right && !isValidChar(s[right])){
      right--  
    }

    while(s[left].toLowerCase() !== s[right].toLowerCase()){
      return false;  
    }
    left++;
    right--;   
  }  
  return true
};

function isValidChar(char){
  return /[a-zA-Z0-9]/.test(char);
}