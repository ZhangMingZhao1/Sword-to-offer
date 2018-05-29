function printMatrix(matrix)
{
    var row = matrix.length;
    var col = matrix[0].length;
    if(row===0||col===0) return null;
    row--;
    col--;
    var ans = [];
    //定义好左上点和右下点,把矩阵建立以左上点为坐标
    let left = 0,top = 0,right = col,bottom = row;
    while(left <= right && top <= bottom) {
      //四个循环，分别控制顶层，右边界，底层，左边界的遍历
      //现在是上边界，从左到右
      for(let i = left; i<=right; i++) {
        ans.push(matrix[top][i]);
      }
      //现在到达了右边界，从上到下
      for(let i = top+1; i<=bottom; i++) {
        ans.push(matrix[i][right]);
      }
      //现在到了下边界，从右到左
      if(bottom>top) {//防止单行重复遍历
        for(let i = right-1; i>=left; i--) {
          ans.push(matrix[bottom][i]);
        }
    }
      //现在到了左边界,从下往上
      if(right>left){//防止单列重复遍历
        for(let i = bottom-1; i>top; i--) {//注意这里不能等于，起点肯定是被push了的
          ans.push(matrix[i][left]);
        }
    }
      //控制边界
      left++,top++,right--,bottom--;
    }
    return ans;
}
var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(printMatrix(matrix));