let password = document.getElementById("password");
let msg = document.getElementById("message");
let strength = document.getElementById("strength");

password.addEventListener('input', ()=>{
    if(password.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(password.value.length < 4){
        strength.innerHTML = "weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = '#ff5925';
    }
    else if(password.value.length >=4 && password.value.length < 8){
        strength.innerHTML = "medium";
        password.style.borderColor = "yellow";
        msg.style.color = 'yellow';
    }
    else{
        strength.innerHTML = "strong";
        password.style.borderColor = "#26d730";
        msg.style.color = '#26d730';
    }
});
