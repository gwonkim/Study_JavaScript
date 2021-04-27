function call8(f) {
    let i = Math.floor(Math.random() * 10 + 1) 
    let a = f(i);
    return console.log(a);
}

function add(i) {
    return i + 100;
}

call8(add);
