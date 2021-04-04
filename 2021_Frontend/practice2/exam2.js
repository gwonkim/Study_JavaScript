function countNumber(a) {
    let count = 0;
    for(let i=0; i<a.length; ++i) {
        if (typeof(a[i]) === 'number') {
            count += 1;
        }
    }
    return count;
}

console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));
