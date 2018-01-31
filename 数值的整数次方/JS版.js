/*
2^11 = 2^1 * 2^2 * 2^8
2^1011 = 1* 2^0001 + 1* 2^0010 + 0*2^0000 +1* 2^1000

11 = 1011(2)
1*x^8 + 0*x^4 + 1*x^2 + 1*x
x是底数，分解二进制 -> 根据新底数重组答案(底数不是2了)
*/
function Power(base, exponent)
{
    p = exponent;
    if(base==0) return 0;
    else if(p==0) return 1;
    else if(p<0)
        p = -p;//变正
    var ans = 1;
    while(p) {
        // console.log(p);
        if(p&1) {
            ans *= base;
        }
        base*=base;//相应的基数自乘
        p = p>>1;//遍历二进制下的每一位
    }
    return exponent>0?ans:1/ans;
}

console.log(Power(2, 3));

