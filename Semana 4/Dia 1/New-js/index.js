// alert("Hola G22");

const numero1 = 10;
const numero2 = 20;

let resultado = 0;

resultado=numero1+numero2;

console.log("El resultado es:", resultado);
// console.error("El error es :", resultado);
// console.warn("El error es :", resultado);

// alert("Hola Mundo");

const valor1=prompt("Ingrese el primer valor");
const valor2=prompt("Ingrese el segundo valor");

resultado=+valor1 + +valor2

// alert(+valor1 + +valor2)

const operacion=prompt("Ingrese una Operacion ");


if(operacion === "+") {
    resultadoCalculadora = +valor1 + +valor2;
    console.log("suma es",resultadoCalculadora)
    }if(operacion ==="-"){
        resultadoCalculadora = +valor1 - +valor2;
        console.log("resta es igual",resultadoCalculadora)
    }if(operacion === ""){
        resultadoCalculadora= +valor1 +valor2;
        console.log("multiplicar", resultadoCalculadora)
    }



 
// switch (operacion) {
//   case "+":
//     resultado=+valor1 + +valor2
//     break;
//   case "-":
//     resultado=+valor1 - +valor2
//     break;
//   case "*":
//     resultado=+valor1 * +valor2
//     break;
//   case "/":
//     resultado=+valor1 / +valor2
//     break;
// }

console.log("El resultado final es", resultado)