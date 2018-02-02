    function ListNode(x){
        this.val = x;
        this.next = null;
    }
    function ReverseList(pHead)
    {

        if(pHead==null)
            return null;
        var pre = null;
        var next = null;

        while(pHead!=null){
            next = pHead.next;
            pHead.next = pre;
            pre = pHead;
            pHead = next;
        }
        return pre;
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