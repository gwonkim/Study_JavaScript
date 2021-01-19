const time = document.querySelector(".js-time");

const setTimeFormat = (num) => {
  const temp = num < 10 ? `0${num}` : num;
  return temp;
};

const upDateTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  time.innerText = `${setTimeFormat(hour)}:${setTimeFormat(minute)}:${setTimeFormat(second)}`;
};

const init = () => {
  upDateTime();
  setInterval(upDateTime, 1000);
};

init();
