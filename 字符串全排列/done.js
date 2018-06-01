function Permutation(str)
{
    let ans = [];
    let arr = str.split("");
    if(str.length===0) return [];
    dfs(ans,arr,0);
    // ans.map(function (item,index) {
    //     return item.join("");
    // })
    ans = ans.filter(function (item,index) {
        return ans.indexOf(item)===index;
    });
    return ans.sort();

}
function dfs(ans,arr,begin) {
    if (begin === arr.length - 1) {
        // let tmp = arr;
        // ans.push(JSON.parse(JSON.stringify(arr)));
        let tmp = arr.join("");
        ans.push(tmp);
        // ans.push(arr);
        // console.log(ans);
    }
    for (let i = begin; i < arr.length; i++) {
        if (i !== begin && arr[begin] === arr[i])
            continue;
        // let _arr = swap(arr,begin, i);
        swap(arr,begin,i)
        // console.log(arr);
        dfs(ans, arr, begin + 1);
        swap(arr,begin, i);
    }
}

function swap(arr,a,b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    // return arr;
}