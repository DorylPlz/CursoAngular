"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'SuperSoldado'
    };
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder; //NO IMPORTA EL ORDEN
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    var extraer = function (avenger) {
        var nombre = avenger.nombre, poder = avenger.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    var extraer2 = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer2(avenger); //Aquí la reestructuración ocurre en el argumento, por lo que te ahorras la linea 16 en extraer()
    //------------------------------------------------------------------------------------------
    var avengers = ['Thor', 'Ironman', 'Spiderman'];
    // [] cuando se quiere desestructurar un arreglo, mientras que {} cuando es un objeto
    // Con los arreglos si debes especificar el orden
    var avg1 = avengers[0], avg2 = avengers[1], avg3 = avengers[2];
    console.log(avg1); //Thor
    console.log(avg2); //Ironman
    console.log(avg3); //Spiderman
    //Para omitir entradas en el array, es de la siguiente forma:
    var avg4 = avengers[2];
    console.log(avg4); //Spiderman
    //Para función: 
    var extraerArr = function (_a) {
        var av1 = _a[0], av2 = _a[1], av3 = _a[2];
        console.log(av1); //Thor
        console.log(av2); //Ironman
        console.log(av3); //Spiderman
    };
    extraerArr(avengers);
})();
