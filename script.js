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



// Cambiar el color de body al presionar el botón darkModeBotton aplicando la class dark-mode
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




    // 1. Escuchar evento personalizado
    document.addEventListener("usuario-autenticado", function () {
      console.log("Evento personalizado: usuario-autenticado recibido");
    });

    // 2. Evitar propagación del evento click
    const contenedor = document.getElementById("contenedor");
    const botonInterno = document.getElementById("interno");

    contenedor.addEventListener("click", function () {
      console.log("Click en el contenedor");
    });

    botonInterno.addEventListener("click", function (event) {
      event.stopPropagation(); // ¡Clave!
      console.log("Click en el botón interno");
    });

    // 3. Simular inicio de sesión
    document.getElementById("login").addEventListener("click", function () {
      const usuario = document.getElementById("usuario").value.trim();

      if (usuario) {
        // Crear y despachar el evento personalizado
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










    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const welcomeSection = document.getElementById("welcomeMessage");
    const welcomeText = document.getElementById("welcomeText");
    const logoutBtn = document.getElementById("logoutBtn");

    // Crear y añadir etiqueta de advertencia si no existe
    let advertencia = document.createElement("p");
    advertencia.id = "advertencia";
    advertencia.style.color = "red";
    form.appendChild(advertencia);

    // 1. Evento personalizado
    document.addEventListener("usuario-autenticado", function (e) {
      console.log("Evento personalizado: usuario-autenticado recibido");
    });

    // 2. Formulario submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        advertencia.textContent = "⚠️ Todos los campos son obligatorios.";
        return;
      }

      if (password.length < 6) {
        advertencia.textContent = "⚠️ La contraseña debe tener al menos 6 caracteres.";
        return;
      }

      advertencia.textContent = ""; // Limpiar mensaje

      // 3. Disparar evento personalizado
      const evento = new CustomEvent("usuario-autenticado", {
        detail: { usuario: username }
      });
      document.dispatchEvent(evento);

      // 4. Ocultar formulario, mostrar bienvenida
      form.classList.add("hidden");
      welcomeText.textContent = `¡Bienvenido, ${username}!`;
      welcomeSection.classList.remove("hidden");

      // 5. Mostrar mensaje 3 segundos después
      setTimeout(() => {
        alert(`¡Gracias por iniciar sesión, ${username}!`);
      }, 3000);
    });

    // 6. Logout
    logoutBtn.addEventListener("click", function () {
      welcomeSection.classList.add("hidden");
      form.classList.remove("hidden");
      usernameInput.value = "";
      passwordInput.value = "";
    });

    // 7. stopPropagation en el contenedor
    const contenedor1 = document.getElementById("contenedor1");
    const botonInterno = document.getElementById("interno");

    contenedor1.addEventListener("click", function () {
      console.log("Click en el contenedor externo");
    });

    botonInterno.addEventListener("click", function (e) {
      e.stopPropagation();
      console.log("Click en el botón interno");
    });
  });