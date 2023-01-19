function once(fn) {
    let times = 0
    return function () {
        if (times === 0) {
            times = 1
            fn.apply(this, arguments)
        }
    }
}

let index = 3
while (index !== 0) {
    once(
        function () {
            console.log(1);
        }
    )()
    index--
}
