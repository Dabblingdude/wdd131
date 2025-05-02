let selectElement = document.querySelector("select");

let logo = document.querySelector('img');

selectElement.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElement.value;
    let body = document.querySelector("body");
    let logo = document.getElementById("logo");

    if (current == "dark") {
        body.classList.add("dark");
        body.classList.remove("darkest");
        logo.setAttribute("src", "images/byui-logo_white.png");
    }

    else if (current == "darkest") {
        body.classList.add("darkest");
        body.classList.remove("dark");
        logo.setAttribute("src", "images/byui-logo_white.png");
    }

    else {
        body.classList.remove("dark");
        body.classList.remove("darkest");
        logo.setAttribute("src", "images/byui-logo_blue.webp");
    }
}