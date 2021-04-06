function createArray(count) {
    let a = [];
    for (let i=0; i<count*2; ++i) {
        if (i % 2 !== 0) {
            a.push(i);
        }
    }
    return a;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
