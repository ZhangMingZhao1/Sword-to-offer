//class Solution {
//    public String replaceSpace(StringBuffer str) {
//        String ans = "";
//        String sstr = str.toString();
//        if(sstr.equals(" "))
//            return "%20";
//        if(sstr.length() == 0)
//            return ans;
//        String[] ss = sstr.split(" ");
//        if(ss.length == 1 ) {
//            return ss[0] + "%20";
//        }
//        for(int i = 0; i < ss.length; i++) {
//            if(i != ss.length-1 ) {
//                ans += (ss[i] + "%20");
//            }else {
//                ans += ss[i];
//            }
//        }
//        return ans;
//    }
//}

class Solution {
    public String replaceSpace(StringBuffer str) {
        String sstr = str.toString();
        sstr = sstr.replaceAll("\\s", "%20");
        return sstr;
    }
}

public class Main {
    public static void main(String[] args) {
        Solution so = new Solution();
        StringBuffer str = new StringBuffer("hello");
        System.out.println(so.replaceSpace(str));
    }
}
