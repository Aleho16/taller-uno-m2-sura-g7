
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

