function test(n = '男') {
    console.log(n)
}

test(2)
console.log(1 == '1')
console.log(1 === '1')

function test(n) {
    if (n === undefined) {
        console.log(1)
    }
}

test()
