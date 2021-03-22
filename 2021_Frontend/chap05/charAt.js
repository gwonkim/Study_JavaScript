let s = "hello world";

for (let i = 0; i < s.length; ++i)
  console.log("%s %s %d", s[i], s.charAt(i), s.charCodeAt(i));

console.log(typeof s[0]);
console.log(typeof s.charAt(0));
