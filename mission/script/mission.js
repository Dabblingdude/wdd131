let selectElement = document.querySelector("select");

let logo = document.querySelector('img');

selectElement.addEventListener("change", changeTheme)

function changeTheme() {
    let current = selectElement.value;
    let body = document.querySelector("body");

    if (current == "dark") {
        body.classList.add("dark");
        // image change
    }

    else if (current == "light") {
        body.classList.remove("dark");
        // image reversion
    }
}