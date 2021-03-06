const form = document.querySelector(".js-form");

const username = document.querySelector(".js-username");
const username__text = document.querySelector(".username__text");
const email = document.querySelector(".js-email");
const email__text = document.querySelector(".email__text");
const password1 = document.querySelector(".js-password1");
const password1__text = document.querySelector(".password1__text");
const password2 = document.querySelector(".js-password2");
const password2__text = document.querySelector(".password2__text");

/* error message */
const idMessage = "Password must be at least 2 characters";
const emailMessage = "Email is not valid.";
const password1Message = "Password must be at least 6 characters.";
const password2Message = "Passwords do not match.";

/* 정규식 */
const idRegExp = /^[a-zA-Z0-9]{2,}$/;
const emailRegExp = /^[a-zA-Z0-9]*[@]{1}[a-zA-Z0-9]*[.]{1}[a-zA-Z0-9]{2,}$/;
const passwordRegExp = /^[a-zA-Z0-9]{6,}$/;

const CHECKTRUE_CN = "checkTrue";
const CHECKFALSE_CN = "checkFalse";

const check = (regExp, checkText, message, messageTag) => {
  if (!regExp.test(checkText)) {
    checkText.classList.add(CHECKTRUE_CN);
    checkText.classList.remove(CHECKFALSE_CN);
    messageTag.innerText = message;
  } else {
    checkText.classList.add(CHECKFALSE_CN);
    checkText.classList.remove(CHECKTRUE_CN);
  }
};

const handleCheck = event => {
  event.preventDefault();
  check(idRegExp, username, idMessage, username__text);
  check(emailRegExp, email, emailMessage, email__text);
  check(passwordRegExp, password1, password1Message, password1__text);

  if (password1 !== password2) {
    password2.classList.add(CHECKFALSE_CN);
    password2__text.innerHTML = password2Message;
  }
  password2.classList.add(CHECKTRUE_CN);
};

const init = () => {
  form.addEventListener("submit", handleCheck);
};

init();
