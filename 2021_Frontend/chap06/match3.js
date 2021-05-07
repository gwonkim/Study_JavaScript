let a = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)&sz=([0-9]+)/)

console.log(a)
console.log(a[0])  // 매칭된 문자열 전체
console.log(a[1])  // 첫째 괄호에 매칭된 부분
console.log(a[2])  // 둘째 괄호에 매칭된 부분
console.log(a.index) // 매칭된 문자열의 위치 index
console.log(a.input) // 입력 문자열
