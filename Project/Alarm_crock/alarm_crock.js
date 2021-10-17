// *jQuery methods list======================================================================================*
// $('h1').css('color','red'); <-- change color of <h1> to red <----basic of how to write code in jQuery

// $(".class_name").on("click", function () {});
// $(".class_name").slideToggle();
// $(document).ready(function() {}); <-- carry out after loaded HTML source
// *JavaScript methods list======================================================================================*
// document.getElementById(".class_name") --> <tag class="class_name" id="id_name"> text </tag>
// document.getElementByName(".class_name") --> <tag class="class_name" id="id_name" name="name"> text </tag>
// document.querySelector()
// addEventListener
// window.addEventListener('DOMContentLoaded', function() {}); <-- carry out after loaded HTML source
// document.createElement('tag_name'); --> let p = document.createElement('p'); <-- Now p is <p>
// document.location.href --> let url = document.location.href; <-- get url from the page
// ---------> document.location.href = 'https://github.com/ShingoTennichi'; <-- move to the url
// document.cookie -->document.cookie = "text" <--I can keep the text like variable
// document.body.appendChild(variable_name); --> document.body.appendChild(p); <--added <p> in body tag
// window.alert("text");
// window.confirm("text");
// .innerHTML
// .textContent --> <This is Variable>.textContent = "text" <--assigned texts
// .classList --> <This is Variable>.classList = "class_name" <--assigned a class
// *Words list======================================================================================*
// window.~~~ <window> has lots of methods
// document. ~~~ <document> is all elements in the page I'm looking at. --> console.log( document.body );
// *================================================================================================*



// !variable box ================================================
let hours, minuets, seconds
const sec = 1000;
const show_clock = document.getElementById("time");
const set_hours = document.getElementById("set_hours")
const set_minuets = document.getElementById("set_minuets")
const set_seconds = document.getElementById("set_seconds")
// !==============================================================

let clock = setInterval(() => {
    // * get current time
    const current_time = new Date();

    //  * hours = 24 hours
    if(current_time.getHours() < 10) {
        hours = "0" + current_time.getHours();
    } else {
        hours = current_time.getHours();
    }

    //  * minuets = 60 mins
    if(current_time.getMinutes() < 10) {
        minuets = "0" + current_time.getMinutes();
    } else {
        minuets = current_time.getMinutes();
    }

    //  * seconds = 60 sec
    if(current_time.getSeconds() < 10) {
        seconds = "0" + current_time.getSeconds();
    } else {
        seconds = current_time.getSeconds();
    }

    // * add current time as text to id="time"
    show_clock.textContent = hours + ":" + minuets + ":" + seconds

    // *sec is 1sec --> const sec = 1000;
}, sec);


let alarm_hours = () => {
    for(let i=0; i < 24; i+=1) {
        if(i < 10) {
            set_hours.options[set_hours.options.length] = new Option("0"+i,"0"+i);
        } else {
            set_hours.options[set_hours.options.length] = new Option(i,i);
        };
    };
};

alarm_hours();

let alarm_minuets = () => {
    for(let i=0; i < 60; i+=1) {
        if(i < 10) {
            set_minuets.options[set_minuets.options.length] = new Option("0"+i,"0"+i);
        } else {
            set_minuets.options[set_minuets.options.length] = new Option(i,i);
        };
    };
};

alarm_minuets();


let alarm_seconds = () => {
    for(let i=0; i < 60; i+=1) {
        if(i < 10) {
            set_seconds.options[set_seconds.options.length] = new Option("0"+i,"0"+i);
        } else {
            set_seconds.options[set_seconds.options.length] = new Option(i,i);
        };
    };
};

alarm_seconds();


// let tes = {"a":"a","b":"b"};
// $(()=> {
//     $(tes).option =  new Option();
// })
// function SetTimer() {
//     let time;
//     let alarm = prompt("Please enter the time you want to wake up. :", "00:00");
//     if (alarm == null || alarm == "") {
//         text = "User cancelled the prompt.";
//     } else {
//         text = "Hello " + alarm + "! How are you today?";
//     }
//     document.getElementById("demo").innerHTML = time;
// }
