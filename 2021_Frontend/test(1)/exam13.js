function doSomething(a, b) {
    let c = a.concat(b);
    return c.sort((i, j) => i-j);
}

let a = [3, 5, 8], b = [2, 1, 6, 4, 7];
console.log(doSomething(a, b));
