let menu = document.getElementById("menu")
let text = document.getElementById("menu-text")
let tendina = document.getElementById("tendina")
let header = document.getElementById("hr")

menu.addEventListener("click", open_menu)

function open_menu(){
    translate_menu()
    tendina.classList.toggle("open")
}

function translate_menu(){
    hr.classList.toggle("open2")
    if(text.innerText === ">"){
        text.innerHTML = "<"
    }else{
        text.innerHTML = ">"
    }
}

