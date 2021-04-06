function sort(a) {
    return a.reverse(a.sort());
}

let a = [ "one", "two", "three", "four", "five" ];
sort(a);
console.log(a);
