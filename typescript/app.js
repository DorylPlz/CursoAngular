"use strict";
function getEdad(edad) {
    return edad + 5;
}
var nombre = 'Daryl';
var apellido = 'Olivares';
var edad = 25;
var salida = nombre + " \n" + apellido + " \n(" + (getEdad(edad) + 10) + ")";
console.log(salida);
