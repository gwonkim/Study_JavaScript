function compareIdentity(p1, p2) {
    return p1 == p2;
}

let p1 = { name: '홍길동', age: 16 };
let p2 = { name: '홍길동', age: 16 };
let p3 = p1;

console.log( compareIdentity(p1, p2) );
console.log( compareIdentity(p1, p3) );
