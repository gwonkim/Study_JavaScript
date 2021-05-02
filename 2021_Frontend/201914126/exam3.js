function countEven(a) {
    return a.filter(v => v%2 !== 1).length; 
}

let a = [7, 1, 9, 4, 15, 23, 2, 11, 5, 12, 3];
console.log( countEven(a) );
