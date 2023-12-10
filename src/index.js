import './style.css';

const formHTML = `<form>
<input type="email" name="email" id="email">
<input type="text" name="country" id="country">
<input type="tel" name="zip-code" id="zip-code">
<input type="password" name="password" id="password">
<input type="password" name="password-confirm" id="password-confirm">
</form>`;

const contentDiv = document.getElementById("content");

contentDiv.innerHTML += formHTML;

