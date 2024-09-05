var frutas = ["Manzana", "Uva", "Fresa", "Banana", "Mandarina", "Naranja"];


for (var i = 0; i < frutas.length; i++) {

    document.getElementById("ListaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}

//Objetos
var persona = { nombre: "Juan", telefono: "12345678" };

// Array de objetos
var contactos = [
    { nombre: "Juan", telefono: "12345678" },
    { nombre: "Carmen", telefono: "87654321" },
];

contactos.push(persona); //Agregando uun elemento = 2

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {
    document.getElementById("ListaContactos").innerHTML += "<li>";
    document.getElementById("ListaContactos").innerHTML += contactos[i].nombre + ": " + contactos[i].telefono;
    document.getElementById("ListaContactos").innerHTML += "</li>";
}