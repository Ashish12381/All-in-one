var a;
function check()
{
    a=parseInt(document.getElementById('numb').value);
    if(a%2==0)
    {
       
        document.getElementById('result').innerHTML="Your number is even";
      document.getElementById('result').style.color='green';
     
    }
    else{
        console.log("Your number is odd")
        document.getElementById('result').innerHTML="Your number is odd";
        document.getElementById('result').style.color='red';
    }
    return false;
}