function sum(a) {
    let sum = 0; 
    a.forEach((item) => sum += item);
    return sum; 
}

console.log(sum([1, 2, 3, 4]))
console.log(sum([3, 4, 5]))
console.log(sum([20, 21]))
