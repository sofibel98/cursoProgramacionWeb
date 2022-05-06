//Importar variables

import{a,b} from './text2.js';
console.log("Imprimo la letra a con el valor: ",a);

//console.log("Hola");
//variables no tienen formato fijo
//variables y constantes camell case
let num = 1 ;
num = "Soy un String";
const soyunaconstante = 2;
//funciones Pascal case
function SumaDeDosNumeros (a,b){
    return a+b
}
//Función anónima
const otraFuncion = (a,b)=>{
    return a+b
}
let resultadoSuma = SumaDeDosNumeros(2,4);
//Impresión de variable
//console.log(resultadoSuma);
let arrowFunction = otraFuncion(2,8);
//console.log(arrowFunction);

/*Arreglo*/
let arrayUno = [1,2,3,4,5,6];

//Spread Operator - permite manipular elementos 
let [uno,dos, ...rest] = arrayUno;
//console.log(uno)
//console.log(dos)
//console.log(rest)

//Destructing 
/* Cuando se */
let objeto = {
    name:"Juan",
    age:32,
    p: 1,
    a:"pedro",
    functionValue:(num)=>{console.log("Aqu[i estoy con el n[umero",num)},
};
//let {age,p,a,functionValue} = objeto;
//functionValue(2);
let objetoDos = {...objeto,a:"chevere",e:"b"};
//console.log(objeto);
//console.log(objetoDos);

//Metodos de arreglo
/*Map sirve para iterar */
let valueV = arrayUno.map ((value)=>value *2);
console.log(valueV);



