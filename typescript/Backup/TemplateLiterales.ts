function getEdad(edad: number){
    return edad + 5;
}

const nombre = 'Daryl';
const apellido = 'Olivares';
const edad = 25;

const salida = 
`${nombre} 
${apellido} 
(${getEdad(edad) + 10})`;

console.log(salida);
