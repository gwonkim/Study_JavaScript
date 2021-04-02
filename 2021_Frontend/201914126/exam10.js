function swap(a, i, j) {
    /* let ii = a.slice(i, i+1);
    let jj = a.slice(j, j+1);
    a.splice(i, 1, jj[0]);
    a.splice(j, 1, ii[0]); */

    // 정답
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    return a;
}

let a = [123, 456];
swap(a, 0, 1);
console.log(a);
