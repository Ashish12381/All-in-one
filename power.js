var base;
var exponent;
var i;
function check()
{
    base=parseInt(document.getElementById('num1').value);
    exponent=parseInt(document.getElementById('num2').value);
    var out=1;
    for(i=1;i<=exponent;i++)
{
   out=base*out;
}
console.log(out);
document.getElementById('result').innerHTML=out;
return false;
}