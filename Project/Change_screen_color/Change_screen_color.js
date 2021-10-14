// * ================================================================================
const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// * ================================================================================
const hex_color2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn2 = document.getElementById("btn2");
const color2 = document.querySelector(".color2");

btn2.addEventListener('click', function() {
    let hexColor2 = "#";
    for(let i =0; i < 6; i+=1) {
        hexColor2 += hex_color2[getRandomNumber2()];
    }
    color2.textContent = hexColor2;
    document.body.style.backgroundColor = hexColor2
});

function getRandomNumber2() {
    return Math.floor(Math.random() * hex_color2.length);
}

// * ================================================================================
const letter = ["a","b","c","d","e"];
const  x = document.getElementById("x");
const class_name = document.querySelector(".class_name");

x.addEventListener('click', function(){
    let Aft = "->";
    for(let i =0; i < 5; i+=1) {
        Aft += letter[getRandomNumber3()];
    }
    class_name.textContent = Aft;
});

function getRandomNumber3() {
    return Math.floor(Math.random() * letter.length);
};