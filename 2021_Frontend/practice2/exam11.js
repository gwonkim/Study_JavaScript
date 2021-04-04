function remove(a, value) {
    const index = a.findIndex((v) => v === value);
    if (index !== -1) {
        return a.splice(index, 1);
    }
    return;
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);
