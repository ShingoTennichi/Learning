let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(which){
        const style = which.currentTarget.classList;
        if(style.contains('decrease')) {
            count -= 1;
        } else if(style.contains('increase'))  {
            count += 1;
        } else {
            count = 0;
        }
        if(count < 0) {
            value.style.color = "red";
        } else if(count > 0) {
            value.style.color = "green"
        } else {
            value.style.color = "#222"
        }
        value.textContent = count;
    });
});


let count2 = 0;
const number = document.querySelector('#number');
const buttons = document.querySelectorAll('.btn2');

buttons.forEach(function(btn2) {
    btn2.addEventListener('click', function(selected) {
        const show_number = selected.currentTarget.classList;
        if(show_number.contains('less')) {
            count2 -= 1;
        } else if(show_number.contains('more')) {
            count2 += 1;
        } else {
            count2 = 0;
        }
        if(count2 < 0) {
            number.style.color = "red";
        } else if(count2 > 0) {
            number.style.color = "gold";
        } else {
            number.style.color = "#000";
        }
        number.textContent = count2;
    });
});