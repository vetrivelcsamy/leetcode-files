/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let hashSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.has(nums[i])) {
            return true;
        }
        hashSet.add(nums[i]);

        if (hashSet.size > k) {
            hashSet.delete(nums[i - k]);
        }
    }

    return false;
};