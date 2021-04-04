function contains(a, value) {
    if (a.find((v) => v === value)) return true;
    return false;
}

let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));
