let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset')
let count = 0;

minus.onclick = function () {
    count--
    counter.innerHTML = count;
}
plus.onclick = function () {
    count++
    counter.innerHTML = count;

}
reset.onclick = function () {
    count=0
    counter.innerHTML = count;
}