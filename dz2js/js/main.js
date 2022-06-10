let text = "";
for (let i = 1; i <= 7; i++){
    for (let j = 0; j < i; j++){
        text += "*"
    }
    text += '\n';
}
console.log(text)
for (let i =1; i <= 100; i++){
    // console.log(i)
    if (i % 3 === 0){
        console.log(i + ' Fizz')
    }
    if (i % 5 === 0){
        console.log(i + ' BUZZ')
    }
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' FizzBuzz')
    }
}