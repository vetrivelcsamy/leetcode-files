/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
   nums.sort((a, b) => a - b);
    let triplets = [];
    let remove = {};


    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            while (left < right) {
                const currentSum = nums[i] + nums[left] + nums[right]

                if (currentSum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++
                    right--
                } else if (currentSum < 0) {
                    left++
                } else if (currentSum > 0) {
                    right--
                }
            }
        }
    }
    return triplets;
};