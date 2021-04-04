function createArray() {
    let a = [];
    for (let j=1; j<4; ++j)
        a.push(j);
    return [a, a, a];
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
