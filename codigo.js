
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
