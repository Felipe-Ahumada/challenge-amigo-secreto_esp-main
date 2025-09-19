// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        console.log(amigos);
    }
}

//Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos")

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerText = amigos[i];
        lista.appendChild(elemento);
    }
}

//Función para sortear los amigos secretos
function sortearAmigo() {
    let resultados = document.getElementById("resultado");
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //comprobar si el array amigos no esta vacio
    if (amigos.length === 0) {
        alert("Por favor, inserte al menos un nombre");
    } else {
        //obtiene el nombre sorteado
        let amigoSecreto = amigos[indiceAleatorio];
        //muestra el resultado en el HTML
        let elemento = document.createElement("li");
        elemento.innerText = `Tu amigo secreto es: ${amigoSecreto}`;
        resultados.appendChild(elemento);   
    }
}