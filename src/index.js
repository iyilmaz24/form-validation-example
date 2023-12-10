import formValidate from './formValidation';
import './style.css';


// the form's skeleton HTML
const formHTML = `<form>
<input type="email" name="email" id="email" placeholder="Email">
<input type="text" name="country" id="country" placeholder="Country">
<input type="text" name="zip-code" id="zip-code" pattern="d{5}" placeholder="Zip Code">
<input type="password" name="password" id="password" placeholder="Password">
<input type="password" name="password-confirm" id="password-confirm" placeholder="Confirm Password">
<button type="submit" id="submit-button">Submit</button>
</form>`;


// render form HTML onto screen
const contentDiv = document.getElementById("content");
contentDiv.innerHTML = formHTML;


// add click listener to form submit button for input validation checking
const formSubmitButtton = document.getElementById("submit-button");
formSubmitButtton.addEventListener("click", formValidate);

