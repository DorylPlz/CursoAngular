"use strict";
(() => {
    console.log('Inicio');
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Se terminó el timeout');
            //reject('Hubo un error');
        }, 1000);
    });
    prom1.then(mensaje => console.log(mensaje)); //Devuelve la respuesta correcta
    prom1.catch(err => console.warn(err)); //Devuelve el error
    //Puede ser realizado igualmente de la siguiente forma:
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('Final');
})();
