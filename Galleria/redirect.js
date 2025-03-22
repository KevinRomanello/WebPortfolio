function visitaGallerie() {
    const elemento = document.getElementById("map-section");
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth' // Fa in modo che lo scorrimento sia fluido
        });
    }
}

function Porfolio(){
    window.open('./Home.html', '_blank');
}

function Linkedin(){
    window.open('https://www.linkedin.com/in/kevinromanello/', '_blank');
}

function GitHub(){
    window.open('https://github.com/KevinRomanello', '_blank');
}

function Instagram(){
    window.open('https://www.instagram.com/kevin_romanello/', '_blank');
}