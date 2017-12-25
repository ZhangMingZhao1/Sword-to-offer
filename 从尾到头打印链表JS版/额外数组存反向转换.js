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

function printListFromTailToHead(head)
{
    var arr = new Array();
    if(head!=null) {
        var cur = head;
        while(cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    }
    arr = arr.reverse();
    return arr;
}

var linklist;
var array = new Array(1,2,3,4);
linklist = init(linklist,array);
console.log(linklist);
console.log(printListFromTailToHead(linklist));
