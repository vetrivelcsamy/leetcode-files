/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let inital = init;

  for(let i = 0; i < nums.length; i++){
    inital = fn(inital, nums[i]);  
  }  
  return inital;
};