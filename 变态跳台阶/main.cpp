//class Solution {
//int ans[105] = {1,2,4,8};
//public:
//    int jumpFloorII(int number) {
//
//		for(int i = 1; i <= 100; i++) {
//            int sum = 0;
//            for(int j = 1; j < i; j++) {
//                sum+=ans[j];
//            }
//            ans[i] = sum+1;;
//        }
//        return ans[number];
//    }
//};



class Solution {
public:
    int jumpFloorII(int number) {
        if (number <= 0) {
            return -1;
        } else if (number == 1) {
            return 1;
        } else {
            return 2 * jumpFloorII(number-1);
        }
    }
};
