var i,nextterm,num;
var text='';
var t1=0;
var t2=1;


function check()
{


    var num=parseInt(document.getElementById('numb').value);
    for(i=1;i<=num;i++)
    {
        text+=' ' +t1 ;
        document.getElementById('result').innerHTML=text;
        nextterm=t1+t2;
        t1=t2;
        t2=nextterm;
       
        
    }
    
    
    return false;
}
