function concat7(...a) {
    return a.reduce((c, b) => c.concat(b));
}

console.log(concat7("a", "b", "c", "d"));
console.log(concat7("e", "f", "g"));
console.log(concat7("h", "i"));
