// DSA Question of the Day:
//
// Problem: Container With Most Water
// ----------------------------------------------
// You are given an array of positive integers 'height' where each element
// represents the height of a vertical line drawn on the x-axis.
// The task is to find two lines that together with the x-axis form
// a container that can hold the maximum amount of water.
//
// Example 1:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49
//
// Explanation:
// The lines at index 1 (height 8) and index 8 (height 7)
// form the container with maximum area 49.
//
// Example 2:
// Input: [1,1]
// Output: 1
//
// ----------------------------------------------
// Approach: Brute Force
// Compare every pair of lines, find the minimum height
// and multiply it with the distance between the lines
// to calculate the area. Keep track of the maximum area.
//
// Time Complexity: O(n²)
// Space Complexity: O(1)
// ----------------------------------------------

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let maxArea = 0;

for (let left = 0; left < height.length; left++) {
  for (let right = left + 1; right < height.length; right++) {
    // Find the minimum height between two lines
    let minHeight = height[left];
    if (height[right] <= minHeight) {
      minHeight = height[right];
    }

    // Calculate distance between two lines
    let distance = right - left;

    // Calculate area for current pair
    let currentArea = minHeight * distance;

    // Update max area if a larger one is found
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }
}

console.log("Maximum water that can be contained is:", maxArea);
