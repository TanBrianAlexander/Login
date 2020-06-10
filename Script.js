function getObj() {
    var username = document.getElementById("user").value
    var password = document.getElementById("pass").value

    if(username == "admin" && password == "admin"){
        document.getElementById("admin-text").style.display = "block";
        setTimeout(function(){document.getElementById("admin-text").style.display = "none";},2000)
        document.getElementById("user").value='';
        document.getElementById("pass").value='';
        return
    }
    else if(username == "user" && password == "user"){
        document.getElementById("user-text").style.display = "block";
        setTimeout(function(){document.getElementById("user-text").style.display = "none";},2000)
        document.getElementById("user").value='';
        document.getElementById("pass").value='';
        return
    }

    alert("Incorrect username or password");
    document.getElementById("user").value='';
    document.getElementById("pass").value='';
} 