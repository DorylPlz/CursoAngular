const miFuncion = function(a: string){
    return a.toUpperCase();
}

const miFuncionF = (a: string) => a.toUpperCase();

const sumarN = function(a:number, b:number){
    return a+b;
}

const sumarF = (a:number, b:number) => a+b;

console.log(sumarF(1,1));

const hulk = {
    nombre: 'Hulk',
    smash(){
        setTimeout(function(){ // Output = Undefined smash!
            console.log(`${this.nombre} smash!`);
        }, 1000 );

        setTimeout(() => { //Output = Hulk smash!, las funciones de flecha no modifican el objeto
            console.log(`${this.nombre} smash!`);
        }, 1000 );
        
    }
}

hulk.smash();