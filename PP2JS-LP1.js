function openMenuBuffet() {
    if (confirm('¿Desea abrir el Menú Buffet en una nueva ventana?')) {
        window.open('menu-buffet.pdf', '_blank');
    }
}

function openMenuPicadera() {
    if (confirm('¿Desea abrir el menú de Refrigerios en una nueva ventana?')) {
        window.open('menu-buffet.pdf', '_blank');
    }
}

function openMenuAlquileres() {
    if (confirm('¿Desea abrir el apartado de Alquileres en una nueva ventana?')) {
        window.open('menu-buffet.pdf', '_blank');
    }
}




function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn-dark-mode");
    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Guardar el estado en localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});
