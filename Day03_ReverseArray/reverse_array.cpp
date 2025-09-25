// DSA Question of the Day:
//
// Problem: Reverse an Array
// ----------------------------------------------
// Given an array of integers, reverse the array
// in-place (without using extra array) and print
// the result.
//
// Example:
// Input: arr = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]


#include <iostream>
using namespace std;

int main() {
    int n = 5;
    int arr[n] = {1, 2, 3, 4, 5};


    int left = 0;
    int right = n - 1;

    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    // Print the reversed array
    cout << "Reversed Array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}


