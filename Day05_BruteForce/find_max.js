// DSA Question of the Day:
//
// Problem: Find Maximum Element in an Array
// ----------------------------------------------
// Write a function to find the largest number
// in a given array of integers without using
// built-in Math.max() function.
//
// Example 1:
// Input: [3, 5, 2, 9, 7]
// Output: 9
//
// Example 2:
// Input: [10, -2, 45, 0, 5]
// Output: 45

const arr = [3, 5, 2, 9, 7];
let maxElement = arr[0];
const n = arr.length;

for (let i=0; i<n; i++){
    if (arr[i]>maxElement){
        maxElement = arr[i]
    }
}

console.log("Maximum Element:", maxElement);
