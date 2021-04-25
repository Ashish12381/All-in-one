var num=0;
var store=0;
var remainder=0;

var sum=0;

function check()
{
num=parseInt(document.getElementById('numb').value);
store=num;
console.log(store);
while(num !==0)
{
 
    remainder= num % 10;

    console.log(remainder)

    sum= sum * 10 + remainder;

    console.log(sum)
 
    num=parseInt(num/10);

    console.log(num);
 
}
console.log(sum)
if(store==sum)
{
    console.log("palindrome")
    document.getElementById('result').innerHTML="Your number is a Palindrome Number..";
}
else{
    console.log("no palindrome");
    document.getElementById('result').innerHTML="Your number is not a Palindrome Number..";

}


return false;
}