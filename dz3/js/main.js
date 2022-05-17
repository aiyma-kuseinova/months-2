function numbers(number1, number2) {
    if (number1<number2){
        console.log(number1 + " первое число меншье")
    }else {
        console.log(number2 + " второе число меньше")
    }
}
numbers(1, 2)

function countChar(string1) {
    return string1.length

}

console.log(countChar('12345678'))