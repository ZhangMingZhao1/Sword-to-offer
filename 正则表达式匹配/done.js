//s, pattern都是字符串
function match(s, pattern)
{   
    if( pattern === "" && s === "" ) 
      return true;
    if( !pattern || pattern.length === 0 )
      return false;
    // pattern = pattern.replace('.',"\\S");
    // console.log(pattern);
    let p = new RegExp("^"+pattern+"$");
    // console.log(p);
    // console.log(p.exec(s));
    // let res = p.exec(s);
    // console.log(res[0].length);
    // console.log(res.index);
    // console.log(res.input);
    
    // return res ? (res.input.length === res[0].length):fasle;
    // return p.exec(s)?true:false;
    return p.test(s);
}

console.log(match("aaa","ab*a"));