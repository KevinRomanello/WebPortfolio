
let AboutMe = document.getElementById("tAB")
let FP = document.getElementById("FP")
window.onload = foto;

function foto(){
    let altezza = AboutMe.offsetHeight; 
    let maxHeight = window.innerHeight * 0.4; 
    if (altezza < maxHeight) {
        FP.style.height = (AboutMe.offsetHeight) + "px";
    }
}

function GoToProgetti(){
    window.open('progetti.html');
}

function GoToHome(){
    window.open('index.html');
}


