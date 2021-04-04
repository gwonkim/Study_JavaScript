let a1 = [];

for (let i=0; i<5; i+=2) {
    a1.push([i, i+1]);
}


let a2 = [];
for (let i = 0; i < a1.length; ++i)
  a2.push(a1[i].slice(0));


a1[0][0] = 100;
console.log(a1);
console.log(a2);