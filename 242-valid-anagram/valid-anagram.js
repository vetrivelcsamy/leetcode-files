/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length){
    return false;  
  }  

  let hashmapS = {};
  let hashmapT = {};

  for(let i = 0; i < s.length; i++){
     hashmapS[s[i]] = (hashmapS[s[i]] || 0) + 1;
     hashmapT[t[i]] = (hashmapT[t[i]] || 0) + 1;  
  }


  for(let index in hashmapS){
    if(hashmapS[index] !== hashmapT[index]){
      return false;  
    }   
  }
  
  return true;
};