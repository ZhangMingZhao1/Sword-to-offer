 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

 function reConstructBinaryTree(pre, vin)
 {
     /*不要想复杂，其实就是不断递归压缩前序数组和中序数组的过程，直到分到的左右子树为null为止，即这时候前序和
     中序数组都是空的。
     */
     // console.log(pre);
     // console.log(vin);
     if(pre.length==0||vin.length==0)
         return null;
     //前序为1 2 4 7 3 5 6 8
     //后台为4 7 2 1 5 3 8 6
     var root = pre[0];
     var index = vin.indexOf(root);
     var leftArr = vin.slice(0,index);
     var rightArr = vin.slice(index + 1);
     // 当只剩下单节点的时候，
     //选择根，继续分开左子树和右子树，递归
     var node = new TreeNode(root);
     node.left = reConstructBinaryTree(pre.slice(1,index+1),leftArr);
     node.right = reConstructBinaryTree(pre.slice(index+1),rightArr);

     return node;
 }

 pre = [1,2,4,7,3,5,6,8];
 vin = [4,7,2,1,5,3,8,6];

 var Node = reConstructBinaryTree(pre,vin);
 console.log(Node);
