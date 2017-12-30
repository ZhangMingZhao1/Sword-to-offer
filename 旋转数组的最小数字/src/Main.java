import javax.print.attribute.standard.MediaSize;
import java.util.ArrayList;

class Solution {
    public int minNumberInRotateArray(int [] array) {
        int len = array.length;
        if(len==0)
            return 0;
        int l = 0;
        int r = len-1;
        int mid = 0;
        while(!(array[l] < array[r])) {
            //特判只有两个数的旋转时，3 1，
            //如果是缩区间到两个数在while循环里3，4，就会跳出while，返回的mid
            if(r-l==1) {
                return array[r];
            }
            mid = (l+r)/2;
            if(array[l] == array[r] && array[l] == array[mid]){
                return OtherSolve(array,l,r);
            }
            //当中间比第一个元素大时，最小数在右边，因为右边的最小序列整体都是小于左边的大序列
            if(array[mid]>=array[l])
                l = mid;
            //当中间比第一个元素小时，最小数在左边，最小序列的任何一个数整体都是小于左边的大序列
            else if(array[mid]<=array[l]) {
                r = mid;
            }
        }
        return array[mid];
    }
     int OtherSolve(int array[],int l,int r){
        int t = array[l];
        for(int i = l+1; i<=r; i++) {
            if(array[i]<t)
                t = array[i];
        }
        return t;
    }
};

public class Main {

    public static void main(String[] args) {
        int[] array = {4,5,6,2,3};
        System.out.println(new Solution().minNumberInRotateArray(array));
    }
}
