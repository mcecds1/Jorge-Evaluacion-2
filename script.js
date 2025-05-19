document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");
    const userField = document.querySelector("#username");
    const welcomeSection = document.querySelector("#welcomeMessage");
    const welcomeText = document.querySelector("#welcomeText");
    const logoutButton = document.querySelector("#logoutBtn");

    const errorText = document.querySelector("#error");

    const displayWelcome = (user) => {
        welcomeText.innerText = `¡Bienvenido, ${user}!`;
        welcomeSection.classList.remove("hidden");
        form.classList.add("hidden");
        form.classList.remove("loginFormclass");
    };

    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
        displayWelcome(storedUser);
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const user = userField.value.trim();

        if (user) {
            localStorage.setItem("currentUser", user);
            displayWelcome(user);
            console.log(`¡Lo encontramos, Siuuuuuu! :).`);
            console.log(`Bienvenido abordo Querido ${user}`);
        } else {
            alert("Por favor, ingresa un nombre que sea valido.");
        }
    });

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            document.getElementById("welcomeMessage").classList.add("hidden");
            document.getElementById("loginForm").classList.remove("hidden");
            console.log("Saltaste del barco :(");
        });
    }
});



// Cambiar el color de body al presionar el botón darkModeBotton aplicando la class dark-mode qe cree en alla
const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;
darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeButton.innerText = "Modo Claro ☀️";
    } else {
        darkModeButton.innerText = "Modo Oscuro 🌙";
    }
});




    
    document.addEventListener("usuario-autenticado", function () {
      console.log("Evento personalizado: usuario-autenticado recibido");
    });

   
    const contenedor = document.getElementById("contenedor");
    const botonInterno = document.getElementById("interno");

    contenedor.addEventListener("click", function () {
      console.log("Click en el contenedor");
    });

    botonInterno.addEventListener("click", function (event) {
      event.stopPropagation(); 
      console.log("Click en el botón interno");
    });

    // 3. Simular inici
    document.getElementById("login").addEventListener("click", function () {
      const usuario = document.getElementById("usuario").value.trim();

      if (usuario) {
       
        const evento = new CustomEvent("usuario-autenticado", {
          detail: { usuario: usuario }
        });
        document.dispatchEvent(evento);

        // Mostrar mensaje 3 segundos después
        setTimeout(() => {
          alert(`¡Gracias por iniciar sesión, ${usuario}!`);
        }, 3000);
      } else {
        alert("Por favor, introduce un nombre de usuario.");
      }
    });










    