/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;

    while (i < nums.length) {
        if (nums[i] !== 0) {
            if (i !== j) {
                nums[j] = nums[i];
                nums[i] = 0;
                
            }
            j++;
        }
        i++
    }
};
