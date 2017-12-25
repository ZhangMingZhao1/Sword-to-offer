class Solution {
    public boolean Find(int target, int [][] array) {

        for(int i = 0; i < array.length; i++) {
            int l = 0;
            if(array.length<=0) return false;
            if(array[0].length<=0) return false;

            int r = array[0].length-1;
            while(l<=r) {
                int mid = (l+r)/2;
                if(target>array[i][mid]) {
                    l = mid+1;
                }
                else if(target<array[i][mid]) {
                    r = mid-1;
                }
                else
                    return true;
            }
        }
        return false;

    }
}

public class Main {
    public static void main(String[] args) {
        int a = 16;
        int[][] array = {{1,3,4},{3,16,1}};
        Solution so = new Solution();
        System.out.println(so.Find(16,array));

    }
}