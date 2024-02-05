/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let buffer = [];

  for(let i = 0; i < arr.length; i++){
    buffer[i] = fn(arr[i], i);  
  }  

  return buffer;
};