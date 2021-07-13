(()=>{

    const enviarMision = ( xmen: any) => { //El problema de esto es que si el obj wolverine no tiene el atributo nombre, esta imprimirá "enviando a undefined a misión"
        console.log(`Enviando a ${xmen.nombre} a la misión 1`);
    }
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    }
    enviarMision(wolverine);

    //Para resolver el problema descrito en el comentario anterior, se hace de la siguiente forma:
    const enviarMision2 = ( xmen: { nombre: string}) => { //Al hacer este cambio, le indica a ts que POR LO MENOS debe tener el atributo nombre
        console.log(`Enviando a ${xmen.nombre} a la misión 2`);
    }
    const wolverine2 = {
        nombre: 'Logan',
        edad: 60
    }
    enviarMision2(wolverine2);

    //Si bien los ejemplos anteriores son funcionables, al momento de mantener el codigo se volvería un infierno, ya que, por ejemplo, al cambiar el atributo "nombre" a "nombreXmen", 
    //tendría que cambiarlo ya en multiples partes, por lo mismo existen las interfaces:
    //Las Interfaces no tienen equivalencia en javascript, esto no será compilado, son puramente para ts
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string; // El signo ? despues del atributo indica que es opcional
    }
    const enviarMision3 = ( xmen: Xmen ) => { 
        console.log(`Enviando a ${xmen.nombre} a la misión 3`);
    }
    const wolverine3: Xmen = {
        nombre: 'Logan',
        edad: 60
    }
    enviarMision3(wolverine3);
})();