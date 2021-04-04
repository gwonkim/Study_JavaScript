function countNumber(a) {
    let count = a.reduce((count, a) => typeof(a) === 'number' ? count += 1 : count, 0)
    return count;
}

console.log(countNumber([1, 2, 3]));
console.log(countNumber(["1", 2, 3]));
console.log(countNumber(["1", 2, 3, 4, true]));
