/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let reach = 0;
    let count = 0;
    let end = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        reach = Math.max(reach, i + nums[i]);
        if (reach >= nums.length - 1) {
            count++;
            break;
        }

        if (i == end) {
            count++
            end = reach;
        }

    }
    return count;
};