function doSomething(a) {
    /* let b = a.slice(0);
    b.splice(0, 1);
    b.splice(-1, 1); */
    return  a.slice(1, -1);
}

let a1 = [3, 4, 5, 6];
let a2 = doSomething(a1);
console.log(a1, a2);
