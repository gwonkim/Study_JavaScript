function getPropertyValue(obj, propertyName) {
    return obj[propertyName];
}

let p1 = { name: '홍길동', age: 16 };
console.log(getPropertyValue(p1, "name")); // p1 객체의 name 속성값이 출력된다.
console.log(getPropertyValue(p1, "age")); // p1 객체의 age 속성값이 출력된다.

let r1 = { width: 11, height: 22 };
console.log(getPropertyValue(r1, "width")); // r1 객체의 width 속성값이 출력된다.
console.log(getPropertyValue(r1, "height")); // r1 객체의 height 속성값이 출력된다.
