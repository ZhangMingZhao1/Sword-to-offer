var stack = [];
function push(node)
{
    stack.push(node);
}
function pop()
{
    stack.pop();
}
function top()
{
    return stack[stack.length-1];
}
function min()
{
    return Math.min.call(null,...stack);
}


/*js做起来就是简单，如果用Java做有下面一个思路：
 
思路：用一个栈data保存数据，用另外一个栈min保存依次入栈最小的数
比如，data中依次入栈，5,  4,  3, 8, 10, 11, 12, 1
       则min依次入栈，5,  4,  3，no,no, no, no, 1
 
no代表此次不如栈
每次入栈的时候，如果入栈的元素比min中的栈顶元素小或等于则入栈，否则不如栈。
import java.util.Stack;
public class Solution {
    Stack<Integer> data = new Stack<Integer>();
    Stack<Integer> min = new Stack<Integer>();
    Integer temp = null;
    public void push(int node) {
        if(temp != null){
            if(node <= temp ){
                temp = node;
                min.push(node);
            }
            data.push(node);
        }else{
            temp = node;
            data.push(node);
            min.push(node);
        }
    }
     
    public void pop() {
        int num = data.pop();
        int num2 = min.pop();
        if(num != num2){
           min.push(num2);
        }
    }
     
    public int top() {
        int num = data.peek();
        return num;
    }
     
    public int min() {
        int num = min.peek();
        return num;
    }
}
*/