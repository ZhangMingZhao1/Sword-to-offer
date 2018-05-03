/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function HasSubtree(pRoot1, pRoot2)
{ 
    // write code here
    if(pRoot1 !== null && pRoot2 !== null) {
        if( judge(pRoot1,pRoot2) ){ 
            return true;
        }else {
            return HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2)
        }

    }
     function judge(p1, p2) {
        if(p2===null) return true;
        if(p1===null) return false;
        if(p1.val !== p2.val )return false; 
        return judge(p1.left,p2.left)&&judge(p1.right,p2.right);
    }
}
