var num;
var remainder;
var temp;
function check()
{
    var result=0;
    num=parseInt(document.getElementById('num1').value);
    temp=num;
    while(num!==0)
    {
        remainder=num%10;
        result=result+(remainder*remainder*remainder);
        num=parseInt(num/10);
    }
    if(result==temp)
    {
        document.getElementById('result').innerHTML="Palindrome Number";
    }
    else{
        document.getElementById('result').innerHTML="Not a palindrome Number";
    }
    return false;
}