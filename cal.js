
function check()
{
var numb=parseInt(document.getElementById('num').value);
var out1= prime(numb);
var out2=even(numb);
var out3=palindrome(numb);
document.getElementById('result').innerHTML=out1+"<br>"+out2+"<br>"+out3;
return false;
}
 function prime(numb)
{
    var i; var count=0;

    if(numb==1)
    {
       // console.log("1 is not a Prime number");
       var a="Not a prime Number";
       return a;
    }
    else{
    for(i=2;i<=numb;i++)
    {
        if(numb%i==0)
        {
            count=count+1;
        }
    }
    if(count==1)
    {
       // console.log("Your Number is a  Prime Number");
        var b="Prime Number";
        return b;
    }
    else{
       // console.log("Your Number is not a prime Number");
       var a="Not a prime Number";
       return a;
    }
}

}
function even(numb)
{
   
    if(numb%2==0)
    {
       
       var c="Even Number";
       return c;
     
    }
    else{
       var d="Odd Number";
       return d;
    }
    
}
function palindrome(numb)
{
var sum=0;
    var store=numb;
    console.log(store);
    while(numb !==0)
    {
     
       var remainder= numb % 10;
    
       
    
        sum= sum * 10 + remainder;
         
        numb=parseInt(numb/10);
    
       
     
    }
    console.log(sum)
    if(store==sum)
    {
       var d="Palindrome Number";
       return d;
    }
    else{
        var e="Not a palindrome";
        return e;
    }
    }