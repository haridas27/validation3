let username = document.getElementById("name")
let password = document.getElementById("pass")
let Eamil = document.getElementById("mil")
let phonenumber = document.getElementById("num")
console.log(username);
console.log(password);
console.log(Eamil);
console.log(phonenumber);


function validation(){
    if (username.value == "") {
        console.log("error");
        nameerror.innerHTML = "valid name"
        event.preventDefault()
    }
    else{
        nameerror.innerHTML = ""
    }
    if(password.value == ""){
        passerror.innerHTML = "valid password"
        event.preventDefault()
    }
    else if (password.value.length < 8) {
        passerror.innerHTML = "max 8 char"
        event.preventDefault()
    }
    else{
        passerror.innerHTML = ""
    }
    if(Emil.value == ""){
        milerror.innerHTML = "valid emilid"
        event.preventDefault()
    }
    else{
        milerror.innerHTML = ""
    }
    if (phonum.value == ""){
        numerror.innerHTML = "not valid"
        event.preventDefault()
    }
    else if(phonum.value.length < 10){
        numerror.innerHTML = "not valid"
        event.preventDefault()
    }
    else if(phonum.value.length > 10){
        numerror.innerHTML = "palce enter the 10 char"
        event.preventDefault()
    }
    else{
        numerror.innerHTML = ""
    }
    return true 
}