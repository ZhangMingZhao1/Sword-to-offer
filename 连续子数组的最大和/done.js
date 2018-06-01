function FindGreatestSumOfSubArray(array)
{
    let len = array.length;
    let max = -Infinity;
    let tmp = 0;
    let sum = 0;
    for(let i = 0; i < len; i++) {
        sum+=array[i];
        if(sum>max) {
            max = sum;
        }
        if(sum<0) {
            sum = 0;
        }
    }
    return  max;
}