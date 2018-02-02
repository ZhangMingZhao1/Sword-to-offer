
var arr = new Array();
var flag = 0;
function FindKthToTail(head, k)
{
    if(head==null) return;
    FindKthToTail(head.next,k);

    if(flag<k)
        arr.push(head.val);
    flag++;
    /* if(flag==k)
         return arr.pop();*/
    return arr.slice(-1)[0];

}
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
var linklist;
var array = new Array(1,2,3,4,5);
linklist = init(linklist,array);
console.log(FindKthToTail(linklist, 1));