function GetLeastNumbers_Solution(input, k)
{   
    if(k>input.length) return [];
    let ans = [];
    input = input.sort();
    //console.log(input.join("").slice(0,4).split(""));
    input.join("").slice(0,k).split("").map(function(item,index) {
      ans.push(parseInt(item))
    });
    return ans;
  }

  console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],8));
