var lowerLimit;
var upperLimit;
var i;
var text = "";
var text1 = "";

function even()
{

   lowerLimit=parseInt(document.getElementById('ll').value);

upperLimit=parseInt(document.getElementById('ul').value);

if(lowerLimit<upperLimit && lowerLimit>=0)
{

for(i=lowerLimit; i<=upperLimit; i++)
{
    if(i%2==0)
    {
       
     text+='<br> ' +i ; 
        console.log(+i);
    }
    document.getElementById('result').innerHTML=text;
   
} 
}
else{
    alert("Please ensure lower limit must be smaller than upper")
}
return false;
}

function odd()
{

   lowerLimit=parseInt(document.getElementById('ll').value);

upperLimit=parseInt(document.getElementById('ul').value);

if(lowerLimit<upperLimit && lowerLimit>=0)
{

for(i=lowerLimit; i<=upperLimit; i++)
{
    if(i%2==1)
    {
        text1+='<br> ' +i ; 
        console.log(+i);
    }
    document.getElementById('result').innerHTML= text1;
   
}  
}
else{
    alert("Please ensure lower limit must be smaller than upper")
}
return false;
}

