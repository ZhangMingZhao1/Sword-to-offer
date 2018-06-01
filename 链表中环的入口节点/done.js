/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{   
  //只有1个节点或者0个节点直接返回null，因为这样不可能产生环
  if(pHead == null || pHead.next == null)
    return null;

    let p1 = pHead;
    let p2 = pHead;
    
    //很巧妙，null是没有next的，否则oj会报访问越界错误，判断p2可走再p2.next可否走即可
    while(p2 !==null && p2.next !== null) {
      p1 = p1.next;
      p2 = p2.next.next;
      if(p1 === p2) {
        p1 = pHead;
        while(p1!==p2) {
          p1 = p1.next;
          p2 = p2.next;
        }
        if(p1 === p2)
          return p1;
      }
    }
    return null;
}