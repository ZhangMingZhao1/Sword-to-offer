function ListNode(x){
    this.val = x;
    this.next = null;
}

function Merge(pHead1, pHead2)
{
    if(pHead1 == null) {
        return pHead2;
    }
    if(pHead2 == null) {
        return pHead1;
    }

    var ans = null;
    if(pHead1.val <= pHead2.val) {
        ans = pHead1;
        ans.next = Merge(pHead1.next,pHead2);
        return ans;
    }else {
        ans = pHead2;
        ans.next = Merge(pHead2.next,pHead1);
        return ans;
    }
    return ans;
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