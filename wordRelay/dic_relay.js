const button = document.querySelector('#button');

const dictionary = [];
button.addEventListener('click', () => {
    const wordTag = document.querySelector('#word');
    const word = wordTag.textContent;
    const inputTag = document.querySelector('#input');
    const input = inputTag.value;
    const errorTag = document.querySelector('#error');
    const dic = document.querySelector('#dic');

    const lastIndex = word.length - 1;
    const w = word[lastIndex];
    const i = input[0];
    
    if (dictionary.includes(input)) {
        errorTag.textContent = '중복 단어 사용 불가';
        inputTag.value = '';
        inputTag.focus();
    } else {
        if (w === i) {
            wordTag.textContent = input;
            errorTag.textContent = '';
            inputTag.value = '';
            inputTag.focus();
            dictionary.push(input);

        } else {
            errorTag.textContent = '땡!';
            inputTag.value = '';
            inputTag.focus();
        }
        dic.textContent = dictionary;
    }

})

/*
input 제외하고 대부분 textContent
form => submit

tag는 가능
*/
