// DSA Question of the Day:
//
// Problem: Longest Common Prefix
// ----------------------------------------------
// Write a function to find the longest common prefix
// string amongst an array of strings.
//
// If no common prefix exists, return an empty string "".
//
// Example 1:
// Input: ["flower", "flow", "flight"]
// Output: "fl"
//
// Example 2:
// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the strings.

const strs = ["flower", "flow", "flight"];
let prefix = strs[0];
const n = strs.length;

for (let i = 1; i < n; i++) {
  const current = strs[i];
  let tempPrefix = "";

  for (let j = 0; j < current.length && j < prefix.length; j++) {
    if (current[j] === prefix[j]) {
      tempPrefix += current[j];
    } else {
      break;
    }
  }

  prefix = tempPrefix;
}

console.log("Longest Common Prefix:", prefix);
