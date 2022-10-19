function onLogin()
{
    console.log(document.getElementById('username'));
    console.log(document.getElementById('password'));
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    if(username.value == 'admin' && password.value == 'nimda')
    {
        alert("Login Successful");
        console.log("Login Successful")
        return false;
        
    }
    else
    {
        alert( "INVALID ");
        
    }
    
}