function ListNode(x){
    this.val = x;
    this.next = null;
}

function init(linklist,array) {
    linklist = new ListNode(array[0])
    var cur = linklist;
    var len = array.length;
    for(var i = 1; i < len; i++) {
        var tmp = new ListNode(array[i]);
        cur.next = tmp;
        cur = cur.next;
    }
    return linklist;
}

//注意这里arr要在外面声明
var arr = new Array();
function printListFromTailToHead(head)
{
    if(head==null)
        return arr;
    printListFromTailToHead(head.next);
    arr.push(head.val);
    return arr;
}

var linklist;
var array = new Array(5,81,61,95);
linklist = init(linklist,array);
console.log(linklist);
console.log(printListFromTailToHead(linklist));
