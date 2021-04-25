var english;
var chemistry;
var maths;
var physics;
var sum=0;
var total=400;


function check()
{
    english=parseInt(document.getElementById('eng').value);

maths=parseInt(document.getElementById('math').value);

chemistry=parseInt(document.getElementById('chem').value);

physics=parseInt(document.getElementById('phy').value);

sum=english+maths+chemistry+physics;
//console.log("You sum is:"+sum);

var percentage= sum/total*100;
//console.log("your percentage is:"+percenatge);
if(percentage>=90)
{
    document.getElementById('result').innerHTML="Passed with Grade A+🎉🎉🎉🎉";
    document.getElementById('result').style.color='green';
    document.getElementsByName('display')[0].value="Your Percenatge is:"+percentage;
    document.getElementsByName('display').disabled=false;
   // document.write(percentage);
  //document.getElementById('result').innerHTML=percentage;
  // console.log(" Passed with Grade A+:"+percenatge);
}
else if(percentage>=75 && percentage<90)
{
    document.getElementById('result').innerHTML="Passed with Grade A🤩🤩🤩🤩";
    document.getElementById('result').style.color='blue';
    document.getElementsByName('display')[0].value="Your Percenatge is:"+percentage;
    document.getElementsByName('display').disabled=false;
   // document.write(percentage);
   // document.getElementById('result').innerHTML=percentage;
   // console.log("Passed with Grade A:"+percentage);
}
else if(percentage>=60 && percentage<75)
{
    document.getElementById('result').innerHTML="Passed with Grade B👍👍👌👌👌";
    document.getElementById('result').style.color='brown';
    document.getElementsByName('display')[0].value="Your Percenatge is:"+percentage;
    document.getElementsByName('display').disabled=false;
   // document.write(percentage);
    //document.getElementById('result').innerHTML=percentage;
    //console.log("Passed with Grade B:"+percentage);
}
else if(percentage>=35 && percentage<60)
{
    document.getElementById('result').innerHTML="Passed with Grade C👏👏👏👏";
    document.getElementById('result').style.color='black';
    document.getElementsByName('display')[0].value="Your Percenatge is:"+percentage;
    document.getElementsByName('display').disabled=false;
    //document.write(percentage);
    //document.getElementById('result').innerHTML=percentage;
   // console.log("Passed with Grade C:"+percentage);
}
else 
{
    document.getElementById('result').innerHTML="Failed...😭😭😭😭";
    document.getElementById('result').style.color='red';
    document.getElementsByName('display')[0].value=  "Your Percenatge is:"+percentage;
    document.getElementsByName('display').disabled=false;
    //document.write(percentage);
    //document.getElementById('result').innerHTML=percentage;
    //console.log("Failed...:"+percentage);
}

return false;
}


