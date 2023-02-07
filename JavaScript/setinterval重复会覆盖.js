
let timer = null
let number = 0

timer = setInterval(() => {
    if (number < 10) {
        console.log('1', number);
        number++
    } else {
        clearInterval(timer)
        timer = null
    }
}, 100);

if (timer) {
    clearInterval(timer)
    timer = null
}

timer = setInterval(() => {
    if (number < 20) {
        console.log('2', number);
        number++
    } else {
        clearInterval(timer)
        timer = null
    }
}, 100);