function cloneObject(obj) {
    return Object.assign({}, obj);
}

let p1 = { name: '홍길동', age: 16 };
let p2 = cloneObject(p1);        // p1 객체를 복제하여 p2 객체 생성
p1.name = "임꺽정"; p1.age = 20; // p1 객체의 속성 값 변경
console.log(p2);                 // p2 객체의 속성은 변경되지 않는다.

let r1 = { width: 11, height: 22 };
let r2 = cloneObject(r1);     // r1 객체를 복제하여 r2 객체 생성
r1.width = 0; r1.height = 0;  // r1 객체의 속성 값 변경
console.log(r2);              // p2 객체의 속성은 변경되지 않는다.
