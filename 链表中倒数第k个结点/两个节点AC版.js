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


function FindKthToTail(head, k)
{
    if(head==null) return null;
    var i = head, j = head;
    while(--k){//注意这里先减
        j = j.next;
        if(!j){
            return null;
        }
    }
    while(j.next){
        i = i.next;
        j = j.next;
    }
    return i;
}

var linklist;
var array = new Array(1,2,3,4,5);
linklist = init(linklist,array);
console.log(FindKthToTail(linklist, 1));