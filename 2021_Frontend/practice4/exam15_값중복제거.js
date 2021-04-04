function remove(a, value) {
    a.forEach(e => {
        const index = a.findIndex((v) => v === value);
        index !== -1 ? a.splice(index, 1) : e;
    });
    return a;
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);
