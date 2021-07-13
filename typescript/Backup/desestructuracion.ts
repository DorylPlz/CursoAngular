(()=>{
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'SuperSoldado'
    }

    const { nombre,clave,poder } = avenger; //NO IMPORTA EL ORDEN

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = ( avenger: any) => {
        const { nombre,poder } = avenger;
        console.log(nombre);
        console.log(poder);
    }
    extraer(avenger);

    const extraer2 = ( {nombre, poder}: any) => {
        console.log(nombre);
        console.log(poder);
    }
    extraer2(avenger); //Aquí la reestructuración ocurre en el argumento, por lo que te ahorras la linea 16 en extraer()

    //------------------------------------------------------------------------------------------

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
    // [] cuando se quiere desestructurar un arreglo, mientras que {} cuando es un objeto
    // Con los arreglos si debes especificar el orden
    const [ avg1, avg2, avg3 ] = avengers;

    console.log(avg1); //Thor
    console.log(avg2); //Ironman
    console.log(avg3); //Spiderman

    //Para omitir entradas en el array, es de la siguiente forma:
    const [ , , avg4] = avengers;

    console.log(avg4); //Spiderman

    //Para función: 
    const extraerArr = ( [av1, av2, av3]: string[] ) => {
        console.log(av1); //Thor
        console.log(av2); //Ironman
        console.log(av3); //Spiderman
    }
    extraerArr(avengers);

})();