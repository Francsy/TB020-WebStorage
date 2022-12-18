
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
localStorage.setItem("datosGuardados", JSON.stringify(arrayDeDatos))

//Ponemos el título la sección donde apareceran los datos 
const seccionDatos = document.getElementById("datosguardados");
const titulo = document.createElement("h2");
titulo.innerHTML = "BASE DE DATOS"
seccionDatos.appendChild(titulo);

//Cuando apretamos submit, ingresamos los nuevos datos en la memoria

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

    let arrayGuardado = JSON.parse(localStorage.getItem("datosGuardados"));
    arrayGuardado.push(nuevosDatos);
    localStorage.setItem("datosGuardados", JSON.stringify(arrayGuardado));


//Sacamos el array de los datos guardados
//const fichasUsuario = JSON.parse(localStorage.getItem("datosGuardados"));

//Y añadimos esos nuevos datos al doom (lo hacemos directamente en el propio evento sin recurrir a la memoria)

const divDatos = document.createElement("div");
seccionDatos.appendChild(divDatos);
const titulo2 = document.createElement("h3");
titulo2.innerHTML = `${nuevosDatos.nombre}`;
divDatos.appendChild(titulo2);
let parrafoDatos1 = document.createElement("p");
divDatos.appendChild(parrafoDatos1);
parrafoDatos1.innerHTML = `Email: ${nuevosDatos.email}`;
let parrafoDatos2 = document.createElement("p");
divDatos.appendChild(parrafoDatos2);
parrafoDatos2.innerHTML = `Mensaje: ${nuevosDatos.mensaje}`;
let imagenDatos = document.createElement("img");
divDatos.appendChild(imagenDatos);
imagenDatos.src = `${nuevosDatos.imagen}`;

})

// 2. Avanzado - Local Storage
// Crea botón para borrar todos los contactos guardados en Local Storage

//El botón ya está en el html con id "delete":

document.querySelector("#delete").onclick = ()=> localStorage.clear()


// Crea botón para borrar un contacto en concreto de Local Storage.

// El botón está en un form de html en el que se pide nombre usuario:
document.querySelector("#deleteForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const user = event.target.delUser.value;
    let arrayUsers = JSON.parse(localStorage.getItem("datosGuardados"));
    
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i]["nombre"] === user) {
        arrayUsers.pop(arrayUsers[i])
        }
    }
    localStorage.setItem("datosGuardados", JSON.stringify(arrayUsers))
})





