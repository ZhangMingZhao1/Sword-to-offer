function ListNode(x){
    this.val = x;
    this.next = null;
}

function Merge(pHead1, pHead2)
{
    if(!pHead1) {
        return !pHead2 ? null:pHead2;
    }else if(!pHead2) {
        return pHead1;
    }

    var ans = new ListNode(-1);
    var l1 = pHead1;
    var l2 = pHead2;
    var cur = ans;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if(!l1) {
        cur.next = l2;
    }
    if(!l2) {
        cur.next = l1;
    }
    return ans.next;
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

var l1,l2;
var arr1 = new Array(1,3,5);
var arr2 = new Array(2,4,6);
l1 = init(l1,arr1);
l2 = init(l2,arr2);
// console.log(l1);
// console.log(l2);
console.log(l1.val);
// console.log(Merge(l1,l2));