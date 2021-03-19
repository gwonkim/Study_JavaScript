let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < a.length; ++i)
  for (let j = 0; j < a[i].length; ++j)
    console.log('a: ', a[i][j]);

let b = [];
b[0] = [1, 2, 3];
b[1] = [4, 5, 6];
b[2] = [7, 8, 9];

for (let i = 0; i < b.length; ++i)
  for (let j = 0; j < b[i].length; ++j)
    console.log('b: ', b[i][j]);
