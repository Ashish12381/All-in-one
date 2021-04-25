var p=0;
var r=0;
var t=0;
 var SI=p*t*r/100;

 function check()
{
    p=parseInt(document.getElementById('pa').value);

r=parseInt(document.getElementById('num').value);

t=parseInt(document.getElementById('yrs').value);

var SI=p*t*r/100;

document.getElementsByName('display')[0].value="Your Simple Interest is:"+SI;
document.getElementById('result').style.color='black';

return false;
}
