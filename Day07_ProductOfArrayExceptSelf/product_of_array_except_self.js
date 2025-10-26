let nums = [1, 2, 3, 4];
let size = nums.length;
let result = new Array(size).fill(0);
let pre = 1, suf = 1;

for (let i = 0; i < size; i++) {
    result[i] = pre;
    pre *= nums[i];
}

for (let i = size - 1; i >= 0; i--) {
    result[i] *= suf;
    suf *= nums[i];
}

console.log(result);
