function even(a) {
    return a.filter((e) => e%2===0);
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log(even(a));
