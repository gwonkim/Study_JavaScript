function doSomething(a) {
    a.forEach(e => {
        console.log('index=%d, type=%s, value=%s', a.indexOf(e), typeof(e), e);
    });
    return a;
}

let a = [3, "hello", true, []];
doSomething(a);
