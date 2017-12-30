var stack1 = [],
    stack2 = [];
function push(node) {
    // write code here
    stack1.push(node);
}
function pop() {
    // write code here
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

/*
// 测试
var arr = [];
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr);
console.log(arr.pop());*/
