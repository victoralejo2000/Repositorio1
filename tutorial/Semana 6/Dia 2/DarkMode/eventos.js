function imprimir() {
  console.log("imprimir");
}

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Prueba");
});

const btn2 = document.querySelector("#btn2");
btn1.addEventListener("keyup", () => {
  alert("Prueba");
});

const input = document.getElementById("input1");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

const inputEnter = document.getElementById("inputEnter");
const mensaje = document.getElementById("mensaje");

inputEnter.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const inputValue = inputEnter.value;
    mensaje.textContent = `ingresaste :${inputValue}`;
    inputEnter.value = "";
  }
});

// Usando Sweet alert

const btnPrueba = document.querySelector("#btn-prueba");
btnPrueba.onclick=function(){
    swal.fire("Hola Mundo")
}

// pregunta


const btnPregunta=document.querySelector("#btn-pregunta");
btnPregunta.onclick=function(){
    swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question")
}

// Error

const btnError=document.querySelector("#btn-error");
btnError.onclick=()=>{
    swal.fire("Error", "Hubo un error", "error")
}


const btnWarning=document.querySelector("#btn-warning");
btnWarning.onclick=()=>{
    swal.fire("Warning", "Alerta cuidado", "warning")
}

const btnDanger=document.querySelector("#btn-danger");
btnDanger.onclick=()=>{
    Swal.fire({
        title: 'Peligro',
        text: 'Cuidado Peligro.',
        imageUrl: './peligro.png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
}

const btnSuccesfuly=document.querySelector("#btn-succesfuly");
btnSuccesfuly.onclick=()=>{
    swal.fire("Exitoso", "Todo correcto", "success")
}

const btnInfo=document.querySelector("#btn-info");
btnInfo.onclick=()=>{
    swal.fire("Info", "Informacion", "info")
}

const textAlert=document.querySelector("#text-alert");
textAlert.onmouseover=()=>{
    swal.fire("Cuidado", "Mouse Over H2", "error")
}