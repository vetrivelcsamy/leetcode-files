/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        const sum = hashmap[target - nums[i]];

        if (sum !== undefined) {
            return [sum, i];
        }

        hashmap[nums[i]] = i;
    }
};