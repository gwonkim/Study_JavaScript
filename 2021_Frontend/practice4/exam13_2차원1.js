function createArray() {
    let a = [];
    for (let i=0; i<3; ++i) {
        let b = [];
        for (let j=1; j<4; ++j)
            b.push(j);
        a.push(b);
    }
    return a;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
