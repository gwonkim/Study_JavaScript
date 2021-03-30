// a 배열의 경로명들 각각에 대해서,
// 아래 부분들을 추출해서 출력하는 코드를 구현하시오.

let a = ["c:/temp/guide.hwp",
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"]

const getExtension = (s) => { // 확장자 
    let index = s.indexOf('.'); // lastIndexOf로 해도 같은 결과 나옴
    return s.substr(index);
}

const getFileNameAndExtension = (s) => { // 파일명 + 확장자
    let index = s.lastIndexOf('/');
    return s.substr(index + 1);
}

const getFileName = (s) => { // 파일명
    let slashIndex = s.lastIndexOf('/');
    let dotIndex = s.lastIndexOf('.');
    return s.slice(slashIndex + 1, dotIndex);
}

console.log('파일 확장자');
for (let i = 0; i < a.length; ++i)
    console.log(getExtension(a[i]));



console.log('파일명+확장자');
for (let i = 0; i < a.length; ++i)
    console.log(getFileNameAndExtension(a[i]));


console.log('파일명');
for (let i = 0; i < a.length; ++i)
    console.log(getFileName(a[i]));


