/* function even(a) { // 버그 실행 시 [ 2, 4, 5, 6 ] 출력
    a.forEach(e => {
        const index = a.findIndex((v) => v % 2 !== 0);
        if (index !== -1) {
            a.splice(index, 1);
        }
    });
    return a;
} */


// 양수부터 시작 시 버그 있음 ***** 왤까..?

function even(a) {
    for (let i = a.length - 1; i >= 0; --i)
        if (a[i] % 2 !== 0)
            a.splice(i, 1);
    return a;
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
even(a);
console.log(a);
