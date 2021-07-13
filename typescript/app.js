"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión 1`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    //Para resolver el problema descrito en el comentario anterior, se hace de la siguiente forma:
    const enviarMision2 = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión 2`);
    };
    const wolverine2 = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision2(wolverine2);
    const enviarMision3 = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión 3`);
    };
    const wolverine3 = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision3(wolverine3);
})();
