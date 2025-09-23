// DSA Question of the Day:

// Problem: Two Sum
// ----------------------------------------------
// Given an array of integers and a target value, 
// return the indices of the two numbers that add up to the target.

// Example:
// Input: arr = [2, 7, 11, 15], target = 9
// Output: [0, 1] 


#include <iostream>
using namespace std;

int main() {
    int n = 4;
    int arr[n] = {2, 11, 7, 15};
    int t = 9;
    int a[2] = {0};

    bool found = false;

    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            if(arr[i] + arr[j] == t) {
                a[0] = i;
                a[1] = j;
          cout << "Target can be achieved at indexes [" << i << ", " << j << "] because "<<endl << arr[i] << " + " << arr[j] << " = " << t ;
                found = true;
            }
        }
    }

    if(!found) {
        cout << "No two numbers add up to target." << endl;
    }

    return 0;
}
