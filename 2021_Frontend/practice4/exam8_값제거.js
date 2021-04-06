function remove(a, index) {
    return a.splice(index, 1);
}

let a = [0, 1, 2, 3];
remove(a, 2);
console.log(a);

remove(a, 1);
console.log(a);
