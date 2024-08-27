var sun = document.getElementById("sun");
var background = document.getElementById("lightOff");

function lightOff() {
    background.style.backgroundImage = "url('./Images/Untitled\ design\ \(4\).png')";
    // style.backgroundImage = "url('img_tree.png')";
    sun.style.background = 'white'
    sun.style.backgroundImage = 'linear-gradient(316deg, rgb(255 255 255) 0%, rgb(96 96 96) 74%)';
    sun.style.left = '0%'
}
function lightOn() {
    background.style.backgroundImage = "url('./Images/Untitled\ design\ \(3\).png')";
    sun.style.backgroundImage = 'linear-gradient(316deg, #df310e 0%, #ffbe0b 74%)';
    sun.style.left = '90%'
}


