/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root) {
      var tmp = root.left;
      root.left = root.right;
      root.right = tmp;
      if(root.left) {
        Mirror(root.left);
      }
      if(root.right) {
        Mirror(root.right);
      }
    }
}
module.exports = {
    Mirror : Mirror
};