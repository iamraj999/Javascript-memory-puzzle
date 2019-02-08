let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
const container = document.getElementById('container');
const winner = document.getElementById('winner');
for (let i = 0; i < 16; i++) {
    const random = Math.round(Math.random() * (numbers.length - 1));
    let num = numbers[random];
    numbers.splice(random, 1);
    let block = document.createElement('div');
    block.classList.add('block');
    block.setAttribute('data', num);
    container.appendChild(block);
}
let className = document.getElementsByClassName('block');
var el1;
var el2;
var count = 0;
var matched = 0;

function myFunction() {
    this.innerHTML = this.getAttribute('data');
    this.classList.add('disabled');
    this.removeEventListener('click', myFunction);
    count++;
    count === 1 ? el1 = this : el2 = this;
    if (count == 2) {
        count = 0;
        if (el1.innerHTML === el2.innerHTML) {
            matched++;
        } else {
            setTimeout(function () {
                el1.innerHTML = '';
                el2.innerHTML = '';
                el1.addEventListener('click', myFunction);
                el2.addEventListener('click', myFunction);
                el1.classList.remove('disabled');
                el2.classList.remove('disabled');
            }, 200)
        }
    }
    if (matched == 8) {
        winner.innerHTML = 'Congratulations you solved the puzzle!!!';
    }
}
for (let i = 0; i < className.length; i++) {
    className[i].addEventListener('click', myFunction, false);
}