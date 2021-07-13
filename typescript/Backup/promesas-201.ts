(()=>{

    const retirarDinero = ( montoRetirar: number): Promise<number> => { //Al indicar el ": Promise<number>" lo que estas haciendo es indicarte a ts que esta funcion retorna una promesa de tipo number
        let dineroActual = 1000;

        return new Promise( ( resolve, reject ) => {
            if( montoRetirar > dineroActual ){
                reject('No hay fondos suficientes');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero( 500 )
        .then(montoActual => console.log(`Me quedan ${montoActual}`))
        .catch(console.warn)

})();