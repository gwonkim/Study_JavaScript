function sortPersons(persons) {
    let s = persons.sort((p1, p2) => p1.name.localeCompare(p2.name));
    return s.reverse();
}

let persons = [
  { name: "홍길동", age: 16 },
  { name: "연흥부", age: 31 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 },
  { name: "이몽룡", age: 17 }
];

sortPersons(persons);
console.log( persons );
