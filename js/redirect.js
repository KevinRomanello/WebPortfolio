function GoToDolomiti() {
    const elemento = document.getElementById("Dolomiti");
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth' // Fa in modo che lo scorrimento sia fluido
        });
    }
}

function GoToBossi() {
    const elemento = document.getElementById("Bossiagenzie");
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth' // Fa in modo che lo scorrimento sia fluido
        });
    }
}

function GoTo3d() {
    const elemento = document.getElementById("3dSito");
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth' // Fa in modo che lo scorrimento sia fluido
        });
    }
}

function GoToAltri() {
    const elemento = document.getElementById("Altri");
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth' // Fa in modo che lo scorrimento sia fluido
        });
    }
}


function GoToProgetti(){
    window.open('progetti.html');
}

function GoToEsperienze(){
    window.open('esperienze.html');
}

function GoToHome(){
    window.open('index.html');
}