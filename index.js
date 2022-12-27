function fibs(num) {
    let num1 = 0
    let num2 = 1
    let sum
    let array = []
    for (let i=0; i < num; i++){
        sum = num1 + num2
        array.push(num1)
        num1 = num2
        num2 = sum
    }
    return array
}

console.log(fibs(8))