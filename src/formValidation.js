/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */


export default function formValidate(event) {

    console.log("formValidate function");
    event.preventDefault();

    const formEmail = document.getElementById("email");
    const formZipcode = document.getElementById("zip-code");
    const formPass = document.getElementById("password");
    const formConfirmPass = document.getElementById("password-confirm");

    // implement labels or divs to prompt user on how to fix any errors
    // implement labels for each input box for easier form use

    // JavaScript Validation API demo/test

    if(formEmail.checkValidity() === false || formEmail.value === ""){
        formEmail.classList.add("invalid");
        console.log("Please provide a valid email address");
        return;
    }   else { formEmail.classList.add("valid") }

    if(formZipcode.checkValidity() === false || formZipcode.value === ""){   
    // if zip code doesnt match html pattern attribute's regex
        formZipcode.classList.add("invalid")
        console.log("Zip Code not in 5 digit format");
        return;
    }    else { formZipcode.classList.add("valid") }

    if(formPass.checkValidity() === false || formPass.value === ""){
        formPass.classList.add("invalid")
        console.log("Password does not meet minimum size of 8 characters");
        return;
    }    else { formPass.classList.add("valid") }

    if(formConfirmPass.value !== formPass.value){
        formConfirmPass.classList.add("invalid")
        console.log("Passwords dont match");
        return;
    }   else { formConfirmPass.classList.add("valid") }


    // if the form passes all the checks, and the function doesn't get returned prematurely:
        // we can send a HTTP POST request to our back-end with the form data

    // after sucessful HTTP POST request:
        // call a function to clear the form values to display placeholders
        // and remove all border styling classes 

    console.log("Form Data Submitted to the Back-End");
};  
