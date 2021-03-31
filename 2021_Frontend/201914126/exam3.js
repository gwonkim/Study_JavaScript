function number1(s) {
    return s.search(/[0-9]/g);
}

console.log(number1("a123a"));
console.log(number1("  345"));
console.log(number1("bbb9a8b"));
