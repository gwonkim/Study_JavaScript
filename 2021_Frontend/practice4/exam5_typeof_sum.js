function sum(a) {
    return a.reduce((a,b) => Number(a)+Number(b));
}

console.log(sum(["1", "2", "3", "4"]))
console.log(sum(["3", "4", "5"]))
console.log(sum(["20", "21"]))
