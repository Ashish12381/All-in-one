var count=0;
var i;
function check()
{
    var num=parseInt(document.getElementById('numb').value);
    if(num==1)
    {
       // console.log("1 is not a Prime number");
        document.getElementById('result').innerHTML="Your number 1 is not a prime number..";
        document.getElementById('result').style.color='red';
    }
    else{
    for(i=2;i<=num;i++)
    {
        if(num%i==0)
        {
            count=count+1;
        }
    }
    if(count==1)
    {
       // console.log("Your Number is a  Prime Number");
        document.getElementById('result').innerHTML="Your number is a Prime Number";
        document.getElementById('result').style.color='green';
    }
    else{
       // console.log("Your Number is not a prime Number");
        document.getElementById('result').innerHTML="Your number is not a prime Number";
        document.getElementById('result').style.color='red';
    }
}
return false;
}

