const form = document.querySelector(".form");
const button = document.querySelector("button");

const CHECKTRUE_CN = "checkTrue";
const CHECKFALSE_CN = "checkFalse";

const check = (regExp, checkText, message, messageTag) => {
  const reg = new RegExp(regExp);
 /*  while (!reg.test(checkText) || checkText.trim() === "") {
     */
    checkText.classList.toggle(CHECKFALSE_CN);
    messageTag.innerText = message;
    console.log('reg Test 부분 후 false')
    if (reg.test(checkText)) {
      console.log('reg Test 부분 후 true')
      checkText.classList.toggle(CHECKTRUE_CN);
      return true;
    } 
/*  }  */
};

const checkUserId = () => {
  const username = document.querySelector(".username-js");
  const username__text = document.querySelector(".username__text");
  const idRegExp = "/[a-zA-Z0-9]/";
  const message = "Please enter.";

  check(idRegExp, username, message, username__text);
};

const checkEmail = () => {
  const email = document.querySelector(".email-js");
  const email__text = document.querySelector(".email__text");
  const emailRegExp = "/[@]{1}*[.]{1}/";
  const message = "Email is not valid.";

  check(emailRegExp, email, message, email__text);
};

const checkPassword = () => {
  const password1 = document.querySelector(".password1-js");
  const password1__text = document.querySelector(".password1__text");
  const passwordRegExp = "/[a-zA-z0-9]{6,}/";
  const message = "Password must be at least 6 characters.";

  check(passwordRegExp, password1, message, password1__text);
};

const checkConfirmPassword = () => {
  const password1 = document.querySelector(".password1-js");
  const password2 = document.querySelector(".password2-js");
  const password2__text = document.querySelector(".password2__text");

  if (password1 !== password2) {
    password2.classList.toggle(CHECKFALSE_CN);
    password2__text.innerHTML = "Passwords do not match.";
  }
  password1.classList.toggle(CHECKTRUE_CN);
};

const checkInput = () => {

  checkUserId();
  console.log('user');
  
  checkEmail();
  checkPassword();
  checkConfirmPassword();
};

const init = () => {
  button.addEventListener("click", checkInput);
  console.log('init');
};

init();
