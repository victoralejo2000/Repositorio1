function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}

function generaNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorfondo() {
  let escogeTipo = (Math.random() * 1).toFixed(0);

  if ((escogeTipo == 0 )) {
    let coolor = "(" + generaNumero(255) + "," + generaNumero(255) + "," + generaNumero(255) + ")";
    return "rgb" + coolor;
  } else {
    let coolor2 = "";
    for (var i = 0; i < 6; i++) {
      coolor2 = coolor2 + generarLetra();
    }
    return "#" + coolor2;
  }
}

const capturaBoton = document.querySelector("#boton-color");
const pintaFondo = document.querySelector("#color-fondo");
const escribeTexto = document.querySelector("#texto-color");
console.log(escribeTexto);
capturaBoton.addEventListener("click", () => {
let colorbackground=colorfondo();
  pintaFondo.style.backgroundColor = colorbackground;
  escribeTexto.value = `background-color: ${colorbackground}`;
//   document.getElementById("color-texto").innerHTML = background-color: ${color};
});

