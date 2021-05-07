function add1(a, b) {
    if (b == undefined) b = 0;
    return a + b;
}

console.log(add1(3, 4))
console.log(add1(3));


function add2(a, b) {
    if (!b) b = 0;
    return a + b;
}

console.log(add2(3, 4))
console.log(add2(3));

function add3(a, b) {
    return a + (b || 0);
}

console.log('add3', add3(3, 4))
console.log('add3', add3(3));
