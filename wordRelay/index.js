/* 기본 */
const btn = document.querySelector('#button');

btn.addEventListener('click', () => {
   const wordTag = document.querySelector('#word');
   const word = wordTag.textContent;
   const inputTag = document.querySelector('#input');
   const input =inputTag.value;
   const errorTag = document.querySelector('#error');
   const lastIndex = word.length -1;
   const w = word[lastIndex];
   const i = input[0];
   if(w === i){
        wordTag.textContent = input;
        errorTag.textContent = '';
        inputTag.value = '';
        inputTag.focus();
   } else {
        errorTag.textContent = '땡!';
        inputTag.value = '';
   }

})

    /* 
    input 제외하고 대부분 textContent
    form => submit

    tag는 가능 
    */