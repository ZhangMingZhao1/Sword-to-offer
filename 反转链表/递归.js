function ListNode(x){
    this.val = x;
    this.next = null;
}

function ReverseList(pHead)
{
    var ansHead, tmp;
    if(!pHead){
        return null;
    }
    if(pHead.next === null){
        return pHead;
    } else {
        ansHead = ReverseList(pHead.next);
    }

    tmp = pHead.next;//保存5节点 &保存4节点
    tmp.next = pHead;//5的下一个节点是4，当前节点是4 &4的下一个节点是3，当前节点是3
    pHead.next = null;//4的下一个节点断掉。&3的下一个节点断掉。
    tmp = null;
    console.log(ansHead);
    return ansHead;
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
console.log(ReverseList(linklist));