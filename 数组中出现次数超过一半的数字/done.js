function MoreThanHalfNum_Solution(numbers)
{   

    var len = numbers.length;
    if(len===0)
      return 0;
    let cnt = [],index;
    for(let i = 0; i < len; i++) {
      index = numbers[i];
      cnt[index]===undefined||NaN? cnt[index]=1 : cnt[index]++;
    }
    //console.log(cnt);
    let max = -1;
    let cur = 0;
    let cntlen = cnt.length;
    for(let i = 0; i < cntlen; i++) {
      if(!cnt[i]) continue;
      max = max>cnt[i]? max : (cur = i,cnt[i])
    }
    if(max>(len/2)) {
      return cur;
    }else {
      return 0;
    }
}

console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));