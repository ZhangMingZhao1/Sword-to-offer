function reOrderArray(array)
{
    if(array.length==0) return [];
    var len = array.length;
    var i = 0;
    while(i<len) {
        while (i < len && judge_q(array[i])) i++;
        var j = i + 1;
        while (j < len && !judge_q(array[j])) j++;
        if (j < len) {
            var tmp = array[j];
            for (var k = j; k > i; k--) {
                array[k] = array[k - 1];
            }
            array[i] = tmp;
        }else {
            break;
        }
    }
    return array;
}

function judge_q(a) {
    if(a&1) return true;
    else return false;
}

var b = [1,2,4,6,7];
console.log(reOrderArray(b));