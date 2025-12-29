function login() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario === "admin" && clave === "1234") {
        document.getElementById("login").classList.add("oculto");
        document.getElementById("menu").classList.remove("oculto");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function verMovimientos() {
    document.getElementById("menu").classList.add("oculto");
    document.getElementById("movimientos").classList.remove("oculto");
}

function volverMenu() {
    document.getElementById("movimientos").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
}

function logout() {
    document.getElementById("menu").classList.add("oculto");
    document.getElementById("login").classList.remove("oculto");
}

