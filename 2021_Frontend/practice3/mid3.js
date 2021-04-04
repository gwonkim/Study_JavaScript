let persons1 = [];

for (let i=0; i<3; ++i) {
    persons1.push({ name: "홍길동", age: 16+i}); 
}

let persons2 = persons1.slice(0);
persons1[0].age = 20;

console.log(persons1);
console.log(persons2);
