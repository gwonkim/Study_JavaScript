let count = 0;

setInterval(() => {
    if(count === 10) return clearInterval();
    console.log('setInterval', new Date(), count);
    count += 1;
}, 1000);
