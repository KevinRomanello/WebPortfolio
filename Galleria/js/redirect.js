function visitaGallerie() {
    const elemento = document.getElementById("map-section");
    if (elemento) {
        // Ottieni la posizione dell'elemento
        const elementPosition = elemento.getBoundingClientRect().top;
        // Aggiungi l'offset desiderato (ad esempio -100px per lasciare spazio in alto)
        const offsetPosition = elementPosition + window.pageYOffset + 100;
        
        // Esegui lo scroll con l'offset
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function Portfolio(){
    window.open('../Home.html', '_blank');
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

function mdc(){
    window.open("Madonna.html", '_blank');
}

function paganella(){
    window.open("Paganella.html", '_blank');
}

function passo(){
    window.open("PassoBroccon.html", '_blank');
}

function folgaria(){
    window.open("Folgaria.html", '_blank');
}

function obereggen(){
    window.open("Obereggen.html", '_blank');
}

function home(){
    window.open("PhotoProject.html", '_blank');
}

function Sitomdc(){
    window.open("https://www.campigliodolomiti.it/it", '_blank');
}

function Sitopaganella(){
    window.open("https://www.paganella.net/it", '_blank');
}

function Sitopasso(){
    window.open("https://www.skilagorai.it/", '_blank');
}

function Sitofolgaria(){
    window.open("https://www.alpecimbra.it/it/scopri-l-alpe-cimbra/localit%C3%A0/folgaria/66-0.html", '_blank');
}

function Sitobereggen(){
    window.open("https://obereggen.com/it", '_blank');
}

