let arr = [-1, 2, 1, -4];
let t = 1;

arr.sort((a, b) => a - b);
let closest = Infinity;

for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];

        if (Math.abs(sum - t) < Math.abs(closest - t)) {
            closest = sum;
        }

        if (sum < t) {
            left++;
        } else if (sum > t) {
            right--;
        } else {
            console.log("Exact match found:", sum);
            return;
        }
    }
}

console.log("Closest sum:", closest);
