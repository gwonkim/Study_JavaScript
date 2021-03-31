function doSomething(a) {
    a.push(a.shift());
    return a
}

let a = ["a", "b", "c"];

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);

console.log(a);
doSomething(a);
