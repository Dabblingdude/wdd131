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
    if (window.innerWidth > 1000) {
        const menu = document.getElementById('menu');

        menu.classList.remove("hide");
    }

    else {
        const menu = document.getElementById('menu');

        menu.classList.add("hide");
    }
}