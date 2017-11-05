class Solution {
    public boolean Find(int target, int [][] array) {
        if(array.length == 0 ) return false;
        //从左下角开始
        int r = array.length - 1;
        int l = 0;
        while(true) {
            if(r<0 || l>array[0].length-1) return false;

            if(array[r][l] > target) {
                r--;
            }else if(array[r][l] < target) {
                l++;
            }else {
                return true;
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        int a = 16;
        int[][] array = {};
        Solution so = new Solution();
        System.out.println(so.Find(16,array));

    }
}