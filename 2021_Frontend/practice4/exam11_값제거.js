function remove(a, value) {
    let index = a.indexOf(value);
    if (index >= 0) {
        a.splice(index, 1);
    }
    return a;
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);
