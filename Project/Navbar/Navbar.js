const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // * This is manual code
    // if(links.classList('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    // * This is automatically response either true or false
    links.classList.toggle('show-links');
});