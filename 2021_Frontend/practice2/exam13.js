// 방법1
function createArray() {
    let array1= [];
    for (let i = 0; i < 3; ++i) {
        let array2= []
        for (let j=0; j < 3; ++j)
            array2.push(j+1);
        array1.push(array2);
    }
    return array1;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
