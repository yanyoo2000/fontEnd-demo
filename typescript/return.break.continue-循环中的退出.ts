console.log('return中断当前函数');
function treturn() {
    for (var i = 0; i < 10; i++) {
        console.log('-i', i)
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                return;
            }
            console.log('--j', j)
        }
    }
}
treturn()

console.log('-------------------');
console.log('break中断当前循环语句');
function tbreak() {
    for (var i = 0; i < 10; i++) {
        console.log('-i', i)
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                break;
            }
            console.log('--j', j)
        }
    }
}
tbreak()

console.log('-------------------');
console.log('continue中断本次循环的项');
function tcontinue() {
    for (var i = 0; i < 10; i++) {
        console.log('-i', i)
        for (var j = 1; j < 5; j++) {
            if (j == 3) {
                continue;
            }
            console.log('--j', j)
        }
    }
}

tcontinue()
