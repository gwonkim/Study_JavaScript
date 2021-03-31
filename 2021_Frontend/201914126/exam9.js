let count = 0;
let callback = () => {
  console.log(new Date());
  if (++count == 10) clearInterval(id);
}
let id = setInterval(callback, 1000);