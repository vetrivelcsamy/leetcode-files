/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let length = nums.length;
    let answer = [];
    answer[0] = 1;

    for (let i = 1; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let right = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right;
        right *= nums[i];
    }
    return answer;
};