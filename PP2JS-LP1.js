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

            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});


document.getElementById('miEnlace').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace redireccione

    const textoACopiar = 'Este es el texto que se copiará al portapapeles.';

    navigator.clipboard.writeText(textoACopiar)
      .then(() => {
        alert('Texto copiado al portapapeles: ' + textoACopiar);
      })
      .catch(err => {
        console.error('No se pudo copiar el texto: ', err);
        alert('No se pudo copiar el texto al portapapeles.');
      });
  });


        document.getElementById('miEnlace').addEventListener('click', function(event) {
          event.preventDefault();
      
          const textoACopiar = 'Este es otro texto para copiar.';
      
          const inputTemporal = document.createElement('textarea');
          inputTemporal.value = textoACopiar;
          document.body.appendChild(inputTemporal);
          inputTemporal.select();
      
          try {
            document.execCommand('copy');
            alert('Texto copiado al portapapeles: ' + textoACopiar);
          } catch (err) {
            console.error('No se pudo copiar el texto: ', err);
            alert('No se pudo copiar el texto al portapapeles.');
          }
      
          document.body.removeChild(inputTemporal);
        });










  function sendMail(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Confirmar si el usuario realmente quiere salir
    let confirmacion = confirm("¿Estás seguro de que quieres enviar este correo? Serás redirigido a Gmail.");

    if (!confirmacion) {
        return; // Si cancela, no hace nada
    }

    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Construir URL de Gmail con los datos del usuario
    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=correo@ejemplo.com&su=${encodeURIComponent("Mensaje de " + nombre)}&body=${encodeURIComponent("Correo: " + correo + "\n\n" + mensaje)}`;

    // Abrir Gmail en una nueva pestaña
    window.open(gmailURL, "_blank");
}
