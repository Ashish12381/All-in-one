var emaiId='';
var password='';

function login(){
    

    emailId = document.getElementById('email').value;
    password = document.getElementById('pwd').value;

    if(emailId=='apal74180@gmail.com' && password=='12345')
    {
        alert("Successfully Logged In...!!!");
        document.getElementById('result').innerHTML="Successfully Logged In";
        document.getElementById('result').style.color='green';
        console.log("Successfully Logged In");
        window.location.href='page.html';
    }
    else{
        alert("Invalid Emai or Password... Try again!!!");
        document.getElementById('result').innerHTML="Invalid Emai or Password... Try again";
        document.getElementById('result').style.color='red';
        console.log("Invalid Emai or Password... Try again");
    }
    return false;

}