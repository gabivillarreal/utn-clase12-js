
console.log('Operador Módulo');
// Operador matemático del módulo %

let numUno = Number(prompt('Introduce un número para saber si es Par o Impar: '))

if(numUno % 2 == 0){
    console.log(numUno);
    console.log('El número ingresado es PAR');
}else{
    console.log('El número ingresado NO es PAR');
}

let resultado = numUno / 2;

console.log('El resultado de la división es: ', resultado);

//Operadores Lógicos


//Funciones
function miFuncion(){

    console.log('Me llamaste para que haga algo');
    
}

miFuncion();

let numDos = 100;
let numTres = 200;

function sumar(a, b){
    let respuesta = a + b;
    console.log('El resultado de la suma es : ' , respuesta);

}

sumar(numDos , numTres);

//Bucles
let frutas = [
    "manzana",
    "pera",
    "frutilla",
    "Mora",
    "limón",
    "kiwi"
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);


console.log('======================================');

//for
for (let index = 0;  index < frutas.length; index ++) {
    console.log('Las frutas son: ', index, frutas[index]);
}




