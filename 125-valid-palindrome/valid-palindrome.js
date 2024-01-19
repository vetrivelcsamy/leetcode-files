/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while(left < right){
    while(left < right && !isVaildString(s[left])){
      left++
    }

    while(left < right && !isVaildString(s[right])){
      right--
    }

    if(s[left].toLowerCase() !== s[right].toLowerCase()){
     return false;
    }
    left++;
    right--;
  } 
  return true; 
};

function isVaildString(char){
  return /[a-zA-Z0-9]/.test(char)  
}