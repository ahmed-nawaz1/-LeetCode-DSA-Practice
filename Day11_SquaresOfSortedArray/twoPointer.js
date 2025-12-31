/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let i = 0;
    let j = n - 1;
    let k = n - 1;

    let arr = new Array(n)

    while (i <= j) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            arr[k] = nums[i] * nums[i];
            i++;
        }
        else {
            arr[k] = nums[j] * nums[j];
            j--;
        }

        k--

    }
    return arr;
};