#include <bits/stdc++.h>
using namespace std;

const int maxn = 4;
struct mat {
    int s[maxn][maxn];
    mat(){
        for(int i = 0; i < maxn; i++)
            for(int j = 0; j < maxn; j++) {
                s[i][j] = 0;
        }
    };
    mat operator * (const mat& c) {
    mat ans;
    for (int i = 0; i < maxn; i++) //矩阵乘法
        for (int j = 0; j < maxn; j++)
            for (int k = 0; k < maxn; k++)
                ans.s[i][j] = ans.s[i][j] + s[i][k] * c.s[k][j];
    return ans;
    }
}str;

mat pow_mod(int k) {
    if (k == 1)
        return str;
    mat a = pow_mod(k/2);//不能改
    mat ans = a * a;
    if (k & 1)
        ans = ans * str;
    return ans;
}

class Solution {
public:
    int Fibonacci(int n) {
        str.s[0][0] = 1;
        str.s[0][1] = 1;
        str.s[1][0] = 1;
        str.s[1][1] = 0;
        if(n==0)
            return 0;
        else {
            mat sub = pow_mod(n);
            int res = 0;
            res = sub.s[0][1];
            return res;
        }
    }
};

int main() {
    Solution *so = new Solution();
    cout<<so->Fibonacci(3)<<endl;
}
