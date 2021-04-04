function even(a) {
    for (let i = a.length - 1; i >= 0; --i)
        a[i] % 2 !== 0 ? a.splice(i, 1) : i;
    return a;
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
even(a);
console.log(a);
