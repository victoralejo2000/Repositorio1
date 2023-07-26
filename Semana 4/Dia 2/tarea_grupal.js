function sumar(numero1, numero2) {
  const suma = numero1 + numero2;
  console.log("El resultado de la suma es: ", suma);
}

sumar(250, 300);

function promedio(nota1, nota2, nota3, nota4) {
  const promgeneral = (nota1 + nota2 + nota3 + nota4) / 4;
  console.log("El promedio de la nota es: ", promgeneral);
}

promedio(11, 15, 18, 17);

function areaRectangulo(base, altura) {
  const area = base * altura;
  console.log("El area del rectangulo es: ", area);
}

areaRectangulo(25, 30);

function areaTriangulo(base, altura) {
  const area2 = (base * altura) / 2;
  console.log("El area del triangulo es: ", area2);
}

areaTriangulo(25, 30);

function areaCircunferencia(radio) {
  const pi = 3.1416;
  const area3 = pi * radio;
  console.log("El area del circunferencia es: ", area3);
}

areaCircunferencia(5);

function sueldoSemanal(sueldo, horas, dias) {
  const sueldo1 = sueldo * horas * dias;
  console.log("El pago semanal es de : ", sueldo1);
}

sueldoSemanal(15, 8, 5);

function medidaVestido(metros) {
  const pulgadas = 0.0254;
  const medida = metros / pulgadas;
  console.log("Cantidad de tela por metros es : ", medida);
}

medidaVestido(10);

function cambioDolares(cantidad, tipo_cambio) {
  const cambio = cantidad * tipo_cambio;
  console.log("La cantidad de dolares adquiridos es : ", cambio);
}

cambioDolares(1000, 3.5);

function entrevista(nombre, anio_nacimiento) {
  const fecha = new Date();
  const anioActual = fecha.getFullYear();
  const edad = anioActual - anio_nacimiento;
  console.log("La edad de", nombre, "es:", edad, "años");
}

entrevista("Juan", 1973);

function menorEdad(nombre1, edad1, nombre2, edad2, nombre3, edad3) {
  if (edad1 < edad2) {
    if (edad1 < edad3) {
      console.log("La edad menor es de:", nombre1, "con", edad1, "años");
    } else {
      console.log("La edad menor es de:", nombre3, "con", edad3, "años");
    }
  } else {
    if (edad2 < edad3) {
      console.log("La edad menor es de:", nombre2, "con", edad2, "años");
    } else {
      console.log("La edad menor es de:", nombre3, "con", edad3, "años");
    }
  }
}

menorEdad("Juan", 15, "Pedro", 30, "Victor", 50);

function bonoAntiguedad(nomTrabajador, anioAntiguedad) {
  if (anioAntiguedad >= 6) {
    console.log("El bono para", nomTrabajador, "es de $ 1000");
  } else {
    switch (anioAntiguedad) {
      case 1:
        console.log("El bono para", nomTrabajador, "es de $ 100");
        break;
      case 2:
        console.log("El bono para", nomTrabajador, "es de $ 200");
        break;
      case 3:
        console.log("El bono para", nomTrabajador, "es de $ 300");
        break;
      case 4:
        console.log("El bono para", nomTrabajador, "es de $ 400");
        break;
      case 5:
        console.log("El bono para", nomTrabajador, "es de $ 500");
        break;
      default:
        console.log("No se ingreso cantidad de años");
        break;
    }
  }
}

bonoAntiguedad("Juan", 5);

function salarioProfesor(salario, profesor, cantAnios) {
  let salarioAnio = 0;

  for (let i = 0; i < cantAnios; i++) {
    anioPago = i + 1;
    incrementoAnual = Math.round((salario * 10) / 100);
    salarioAnio = Math.round(salario + incrementoAnual);

    console.log(
      "El sueldo del profesor",
      profesor,
      "el",
      anioPago,
      "año es de $",
      salario,
      "con un incremento del 10% es de $",
      incrementoAnual,
      "y un pago anual de $",
      salarioAnio
    );

    salario = salarioAnio;
  }
}

salarioProfesor(1500, "Juan", 6);

function calificacionAlumnos(numAlumnos) {
  let reprobados = 0;
  let aprobados = 0;

  for (let i = 0; i < numAlumnos; i++) {
    nomNota = "nota " + (i+1);
    const notaAlum=prompt(nomNota);

    if(notaAlum<=10){
        reprobados= reprobados+1;

    }else{
        aprobados= aprobados+1;
    }

  }

  console.log("El total de alumnos reprobados:", reprobados);
  console.log("El total de alumnos aprobados:", aprobados);  
}

calificacionAlumnos(3);
