
//ejercicio 1

let compras = ["Manzanas"];

compras.push("Leche");
compras.push("Pan");
compras.unshift("Huevos");
compras.splice(1, 1);

console.log(compras);

//ejercicio 2 
let tareas = ["Revisar emails"];
compras.unshift("llamar cliente")
compras.unshift("preparar reporte")
tareas.shift();
tareas.shift();

console.log(tareas);

//ejercicio 3
let historial = ["google.com", "youtube.com", "facebook.com"];
historial.pop();
historial.pop();

console.log(historial);

//ejercicio 4
let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

colaImpresion.shift();
colaImpresion.push("doc4.txt");
colaImpresion.shift();

console.log(colaImpresion);

//ejercicio 5
let fila = ["Ana", "Luis", "Carlos", "Maria"];

fila.splice(1, 1);
fila.splice(1, 0, "Jorge");

console.log(fila);

//ejercicio 6
let mazo = ["As", "Rey", "Reina", "Jota"];

mazo.reverse();
mazo.shift();

console.log(mazo);

//ejercicio 7

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

asientos.fill("Reservado", 1, 4);

console.log(asientos);

//ejercicio 8
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];
productos.splice(2, 1, "Mouse Nuevo");

console.log(productos);

//ejercicio 9

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];
estudiantes.sort();

console.log(estudiantes);

//ejercicio 10

let puntuaciones = [100, 85, 92, 78];
puntuaciones.fill(0);

console.log(puntuaciones);

//ejercicio 11

let carrito = [];

carrito.push("Camisa");
carrito.push("Pantalón");
carrito.unshift("Zapatos");
carrito.splice(1, 1);

console.log(carrito);

//ejercicio 12
let commits = ["v1.0", "v1.1"];

commits.push("v1.2");
commits.pop();
commits.push("v1.2-corregido");

console.log(commits);
