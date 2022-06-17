


const arr1 = [1,2,3,4,5,6,];
const arr2 = [1,2,3,4,5,6,];
const arr3 = [1,2,3,4,5,6,];
const arr4 = [1,2,3,4,5,6,];
const arr5 = [1,2,3,4,5,6,];

const arr6 = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5, 7,8,9,10];
console.log(arr6);


const obj = {
    name: 'John',
    age: 20,
    salary: 50000,
    family: true,
    height: 175
}

const objExtended = {
    ...obj,
    key: 1,
    key1: 2,
    key2: 3,
}


console.log(objExtended);

const text = document.getElementById('text');
const send = document.getElementById('send');
send.addEventListener('click', ()=>{
    let hello = document.createElement('div');
    hello.innerText = `hello ${text.value}`;
    document.body.append(hello);
})