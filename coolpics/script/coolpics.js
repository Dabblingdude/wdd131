const menuButton = document.querySelector("button");

const gallery = document.getElementsByClassName("gallery")

menuButton.addEventListener("click", buttonPressed);

window.addEventListener("resize", handleResize);

gallery.addEventListener('click', openModal(event));


function buttonPressed() {
    const menu = document.getElementById('menu');
    
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
    } 
    
    else {
        menu.classList.add("hide");
    }
}

function handleResize() {
    if (window.innerWidth > 1000) {
        const menu = document.getElementById('menu');

        menu.classList.remove("hide");
    }

    else {
        const menu = document.getElementById('menu');

        menu.classList.add("hide");
    }
}

function openModal(e) {
    const img = event.target.closest('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || '';
    const full = src.split('-')[0] + '-full.jpeg';

    modalImage.src = full;
    modalImage.alt = alt;
}