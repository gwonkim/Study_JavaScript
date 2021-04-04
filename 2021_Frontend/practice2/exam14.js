function createArray() {
    let a = [];
    for (let j = 0; j < 3; ++j)
        a.push(j + 1);
    return [a, a, a];
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
