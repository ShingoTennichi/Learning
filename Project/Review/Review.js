// *=================================================================
const reviews = [
    {
        id : 1,
        name : "susan",
        job : "web",
        img : "url",
        text : "sample.sample.",
    },
    {
        id : 2,
        name : "anna",
        job : "design",
        img : "url",
        text : "sample.sample.sample.sample.",
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showperson(currentItem);
});

function showperson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem += 1;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showperson();
})

prevBtn.addEventListener('click', function() {
    currentItem -= 1;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showperson();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showperson();
})