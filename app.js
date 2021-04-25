var a,b,sum,sub,mul,div;
a=0;
b=0;

function add(){
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    sum=a+b;
    document.getElementById('result').value=sum;
    console.log("Addition of two No is:"+sum);
}
function Substraction(){
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    sub=a-b;
    document.getElementById('result').value=sub;
    console.log("Substraction of two No is:"+sub);
}
function Multiplication(){
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    mul=a*b;
    document.getElementById('result').value=mul;
    console.log("Multiplication of two No is:"+mul);
}
function Division(){
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    div=a/b;
    document.getElementById('result').value=div;
    console.log("Multiplication of two No is:"+div);
}










 

