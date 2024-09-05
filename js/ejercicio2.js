var productos = [
    { nombre: "Jugo de Lata manzana", precio: 0.60 },
    { nombre: "Crema Sedal", precio: 0.15 },
    { nombre: "Coca-cola lata", precio: 0.75 },
    { nombre: "Frijol libra", precio: 1.00 },
    { nombre: "Galleta Oreo", precio: 0.25 },
    { nombre: "Cafe mussun suave caja", precio: 2.25 },
    { nombre: "Chocolatina", precio: 0.25 },
    { nombre: "Arroz blanco libra", precio: 1.00 },
    { nombre: "Crema de vaca", precio: 0.25 },
    { nombre: "Yogurt", precio: 0.25 },
];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html += "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
}
