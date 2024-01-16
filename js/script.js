const colors = ["green", "red", "blue", "rgba(133,122,200)", "#ddd", "#704EBB"];

let btn         = document.querySelector('.cf-click_btn');
let color       = document.querySelector('.color');
let mainBody    = document.querySelector('.cf-main_body');


btn.addEventListener( 'click', function() {
    // alert("Hello");
    let randomNumber = getRandomNumber();
    // console.log(randomNumber);
    mainBody.style.backgroundColor  = colors[randomNumber];
    color.textContent               = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}