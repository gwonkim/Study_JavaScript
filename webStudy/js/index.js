
//상수
//const b = 2;
// let 
//var 전역변수 
//const, let 지역변수 

const title = document.querySelector(".js-title");
const increase = document.querySelector(".js-increase");
const decrease = document.querySelector(".js-decrease");

// 클래스 
const EVEN_CN = "even"; 

const checkEven = (number) => {
    title.classList.toggle(EVEN_CN);
//toggle 클래스 네임이 있으면 remove 없으면 add;
   /*  if (number % 2 == 0){
        title.classList.add(EVEN_CN);
    } else {
        title.classList.remove(EVEN_CN);
    } */
}

const setTitleNumber = (number) => {
    title.innerHTML = number;
    title.classList.toggle(EVEN_CN);
   // checkEven(number);
};

// arrow function 
const handleIncrease = () => {
    const currentNumber = parseInt(title.innerHTML);
    setTitleNumber(currentNumber + 1);

    //console.log(typeof currentNumber);
    //console.log("INCREASE");
};

const handleDecrease = () => {
    const currentNumber = parseInt(title.innerHTML);    
    setTitleNumber(currentNumber - 1);
};

function init() {
    // js camelCase
    // 파이썬 띄어쓰기 _ 
    //console.log(title);

    increase.addEventListener("click", handleIncrease);
    decrease.addEventListener("click", handleDecrease);
}

init();



