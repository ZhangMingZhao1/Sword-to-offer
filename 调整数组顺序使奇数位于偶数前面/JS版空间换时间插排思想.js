function reOrderArray(array)
{
    var ans_q = [];
    var ans_o = [];
    for(var i = 0; i <array.length; i++) {
        if(array[i]&1) {
            ans_q.push(array[i]);
        }
        else {
            ans_o.push(array[i]);
        }
    }
    return ans_q.concat(ans_o);
}

var a = [1,2,3,4,5,6,7];
console.log(reOrderArray(a));