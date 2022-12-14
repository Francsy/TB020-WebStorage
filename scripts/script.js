
// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:

// Nombre
// Email
// Mensaje
// URL imagen
// Guardar en Local Storage los datos de contacto enviados de cada usuario
// Mostrar los datos de los contactos guardados en el DOM
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave


//Guardamos un array vacío en nuestro almacenamiento local
const arrayDeDatos = [];
localStorage.setItem("Datos guardados", JSON.stringify(arrayDeDatos))


//Cuando apretamos submit, queremos ingresar los datos en la memoria que hemos creado

document.querySelector("#guarda-datos").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.nombre.value;
    const mail = event.target.email.value
    const message = event.target.mensaje.value
    const image = event.target.avatar.value;

    const nuevosDatos = {
        nombre: name,
        email: mail,
        mensaje: message,
        imagen: image
    }

    let arrayGuardado = JSON.parse(localStorage.getItem("Datos guardados"));
    arrayGuardado.push(nuevosDatos);
    localStorage.setItem("Datos guardados", JSON.stringify(arrayGuardado));


//Sacamos el array de los datos guardados
const fichasUsuario = JSON.parse(localStorage.getItem("Datos guardados"));

//Pintamos el DOM

const seccionDatos = document.getElementById("datosguardados");
const titulo = document.createElement("h2");
titulo.innerHTML = "BASE DE DATOS"
seccionDatos.appendChild(titulo);

for (let i = 0; i < fichasUsuario.length; i++) {

    

    const divDatos = document.createElement("div");
    seccionDatos.appendChild(divDatos);
    const titulo2 = document.createElement("h3");
    titulo2.innerHTML = `${i+1} - ${fichasUsuario[i].nombre}`;
    divDatos.appendChild(titulo2);
    let parrafoDatos1 = document.createElement("p");
    divDatos.appendChild(parrafoDatos1);
    parrafoDatos1.innerHTML = `Email: ${fichasUsuario[i].email}`;
    let parrafoDatos2 = document.createElement("p");
    divDatos.appendChild(parrafoDatos2);
    parrafoDatos2.innerHTML = `Mensaje: ${fichasUsuario[i].mensaje}`;
    let imagenDatos = document.createElement("img");
    divDatos.appendChild(imagenDatos);
    imagenDatos.src = `${fichasUsuario[i].imagen}`;


}


})






// 2. Avanzado - Local Storage
// Crea botón para borrar todos los contactos guardados en Local Storage
// Crea botón para borrar un contacto en concreto de Local Storage.