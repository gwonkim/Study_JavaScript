let a = [ "hello.html", "world.js", "readme.txt" ];

let getExtension = (s) => s.slice(s.indexOf('.'));

for (let i = 0; i < a.length; ++i) 
  console.log(getExtension(a[i]));
