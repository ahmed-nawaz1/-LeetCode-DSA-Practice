/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let officer = 0;
    let CM = 1;
    let k = 1;

    while (CM < nums.length) {
        if (nums[officer] !== nums[CM]) {
            officer++;
            nums[officer] = nums[CM];
            k++;
        }
        CM++;

    }

    return k;
};