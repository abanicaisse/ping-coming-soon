const submitBtn = document.querySelector(`form input[type="submit"]`);
const email = document.querySelector(`form input[type="email"]`);
//create the regex to verify the email
const emailRegex = /^\w+@\w+/i;

submitBtn.addEventListener("click", errorPop);
email.addEventListener("keyup", errorFade)

//Show the error message when user input the wrong email
function errorPop(e){
    const errorMsg = document.createElement("p");
    errorMsg.appendChild(document.createTextNode(`Please provide a valid email address`));
    errorMsg.className = "error-msg";
    if (email.value === '' || !emailRegex.test(email.value)){
        email.style.border = "1px solid hsl(354, 100%, 66%)";

        document.querySelector(".error-msg").style.display = "block";

        console.log(document.querySelector(`label`));
        console.log(errorMsg);
        e.preventDefault();
    }

}

// Fade away the error Message when the user is typing
// email.addEventListener("keydown", errorFade);

function errorFade(){
    document.querySelector(".error-msg").style.display = "none"
    email.style.border = "1px solid hsl(223, 87%, 63%)";
}

