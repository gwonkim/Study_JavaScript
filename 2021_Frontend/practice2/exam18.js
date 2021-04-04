// path 함수는 파라미터 s 문자열에서 / 문자를 구분 문자로하여 index 위치의 부분 문자열을 리턴한다.

function path(s, index) {
    let a = s.split('/');
    return a[index];
}

let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index) {
    // console.log(s, index);
    console.log(path(s, index));
}
