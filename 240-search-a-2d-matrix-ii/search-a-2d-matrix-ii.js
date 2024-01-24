/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let low = 0;
        let high = matrix[i].length - 1;

        while (low <= high) {
            const mid = Math.floor(low + (high - low) / 2);

            if (matrix[i][mid] === target) {
                return true;
            }

            if (matrix[i][mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1
            }
        }
    }
    return false;
};