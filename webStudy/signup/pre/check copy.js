const signupButton = document.querySelector(".js-signupButton");
const button = document.querySelector("button");

const CHECKTRUE_CN = "checkTrue";
const CHECKFALSE_CN = "checkFalse";

const check = (regExp, checkText, message, messageTag) => {
  const reg = new RegExp(regExp);
  if (!reg.test(checkText)) {
    checkText.classList.toggle(CHECKFALSE_CN);
    messageTag.innerText = message;
  }
  checkText.classList.toggle(CHECKTRUE_CN);
};

const checkUserId = () => {
  const username = document.querySelector(".js-username");
  const username__text = document.querySelector(".username__text");
  const idRegExp = "/^[a-z]{2,15}$/";
  const message = "Please enter.";

  check(idRegExp, username, message, username__text);
};

const checkEmail = () => {
  const email = document.querySelector(".js-email");
  const email__text = document.querySelector(".email__text");
  const emailRegExp = "/^[@]{1,}[.]{1,}$/";
  const message = "Email is not valid.";

  check(emailRegExp, email, message, email__text);
};

const checkPassword = () => {
  const password1 = document.querySelector(".js-password1");
  const password1__text = document.querySelector(".password1__text");
  const passwordRegExp = "/^[a-zA-Z/d]{6,}$/";
  const message = "Password must be at least 6 characters.";

  check(passwordRegExp, password1, message, password1__text);
};

const checkConfirmPassword = () => {
  const password1 = document.querySelector(".js-password1");
  const password2 = document.querySelector(".js-password2");
  const password2__text = document.querySelector(".password2__text");

  if (password1 !== password2) {
    password2.classList.toggle(CHECKFALSE_CN);
    password2__text.innerHTML = "Passwords do not match.";
  }
  password2.classList.toggle(CHECKTRUE_CN);
};

const handleCheck = () => {
  checkUserId();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
};

const init = () => {
  signupButton.addEventListener("click", handleCheck);
};

init();
