const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let btn         = document.querySelector('.cf-click_btn');
let colorTag    = document.querySelector('.color');
let mainBody    = document.querySelector('.cf-main_body');


btn.addEventListener( 'click', function() {
    // Generating Hex Color Code
    let color = '#';
    for( let i = 0; i < 6; i++){
        color += hexColors[getRandomNumber()];
    } 

    mainBody.style.backgroundColor  = color;
    colorTag.textContent            = color;

    // let randomNumber = getRandomNumber();
    console.log(color);

});

function getRandomNumber() {
    return Math.floor(Math.random() * hexColors.length);
}