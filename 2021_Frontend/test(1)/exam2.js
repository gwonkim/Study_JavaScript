function space1(s) {
    let a = s.indexOf(' ');
    return s.indexOf(' ', a+1);
}

console.log(space1("a b c"));
console.log(space1("one two three"));
