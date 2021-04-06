function contains(a, value) {
    return a.indexOf(value) >= 0 ? true : false; 
}

let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));
