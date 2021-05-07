function sum(...a) {
    let result = 0;
    for (let i = 0; i < a.length; ++i)
        result += a[i];
    return result; 
}

console.log(sum(1, 2, 3, 4));
console.log(sum(4));
console.log(sum());
