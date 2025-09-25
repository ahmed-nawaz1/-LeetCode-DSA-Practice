// DSA Question of the Day:
//
// Problem: Find Maximum in Array
// ----------------------------------------------------
// Given an array of integers, find and return 
// the maximum element in the array.

// Example 2:
// Input: arr = [-10, -3, -50, -1]
// Output: -1


#include <iostream>
using namespace std;

int main() {
    int n = 4;
    int arr[n] = {-10, -3, -50, -1};

    int max_Num = arr[0];  

    for (int i = 1; i < n; i++) {
        if (arr[i] > max_Num) {
            max_Num = arr[i];
        }
    }

    cout << "Max number is " << max_Num << endl;

    return 0;
}
