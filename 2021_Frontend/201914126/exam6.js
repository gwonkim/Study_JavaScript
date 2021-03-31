function word6(s, index) {
    return s.split(', ')[index];
}

let s = "zero, one, two, three";
console.log("[" + word6(s, 0) + "]");
console.log("[" + word6(s, 1) + "]");
console.log("[" + word6(s, 2) + "]");
console.log("[" + word6(s, 3) + "]");
