const menuButton = document.querySelector("button");

menuButton.addEventListener("click", buttonPressed);

window.addEventListener("resize", handleResize);


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
    const menu = document.getElementById('menu');
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    
    else {
        menu.classList.add("hide");
    }
}

const gallery = document.querySelector(".gallery")
const modal = document.querySelector("dialog");
const modalImage = document.getElementById("modal-img");
const closeButton = document.querySelector(".close-viewer");

gallery.addEventListener('click', openModal);
closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
  if (!modalImage.contains(event.target) && !closeButton.contains(event.target)) {
    modal.close();
  }
});

function openModal(event) {
    const img = event.target.closest('img');
    if (!img) return;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt') || '';
    const full = src.split('-')[0] + '-full.jpeg';

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}