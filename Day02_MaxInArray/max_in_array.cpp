#include <iostream>
using namespace std;

int main (){
    int n = 4;
    int  arr[n] = {-10, -3, -50, -1};
    int max_Num = arr[0] ;

    for(int i=1; i<n; i++){
        if(arr[i]>max_Num){
            max_Num=arr[i];
        }
    }

    cout << "max number are " << max_Num;

}