let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let resultado = num1 - num2;

if (resultado > 0) {
  console.log("Es mayor a 0");
  let imparPar = resultado % 2;
  if (imparPar == 0) {
    console.log("Es par");
  } else {
    console.log("Es inpar");
  }
} else {
  console.log("Es menor o igual a 0");
}
