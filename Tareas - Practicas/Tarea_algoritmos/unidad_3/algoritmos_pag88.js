/* 3.1 Realice un algoritmo para determinar si una persona puede 
votar con base en su edad en las próximas elecciones. Construya 
el diagra¬ma de flujo, el pseudocódigo y el diagrama N/S. */
const edadElecciones = () => {
  let edadPersona = parseInt(
    prompt("Ingrese la edad de la persona a sufragar")
  );
  if (edadPersona >= 18) {
    alert("La edad de la persona le permite sufragar");
  } else {
    alert("Es menor de edad y no puede sufragar");
  }
};

/* 3.2 Realice un algoritmo para determinar el sueldo semanal de un 
tra¬bajador con base en las horas trabajadas y el pago por hora, 
considerando que después de las 40 horas cada hora se considera 
como excedente y se paga el doble. Construya el diagrama de flujo, 
el pseudocódigo y el diagrama N/S. */
const sueldoSemanal = () => {
  const horaSemanales = 40;
  let horasTrabajadas = prompt("Ingrese las horas trabajados");
  let pagoHora = prompt("Ingrese el monto a pagar por hora");
  if (horasTrabajadas > horaSemanales) {
    let excendenteHora = horasTrabajadas - horaSemanales;
    let horasBase = horasTrabajadas - excendenteHora;
    let pagoBase = horasBase * pagoHora;
    let pagoExcedente = excendenteHora * (pagoHora * 2);
    let pagoSemanal = horaSemanales * pagoHora + pagoExcedente;
    alert(
      "El pago semanal es de: " +
        pagoSemanal +
        " soles por " +
        horasTrabajadas +
        " horas trabajadas \nPago base de: " +
        pagoBase +
        " soles por " +
        horasBase +
        " horas trabajadas \nPago extra (doble) de: " +
        pagoExcedente +
        " soles por " +
        excendenteHora +
        " horas trabajadas"
    );
  } else {
    let pagoSemanal = horasTrabajadas * pagoHora;
    alert(
      "El pago semanal es de: " +
        pagoSemanal +
        " soles, por " +
        horasTrabajadas +
        " horas trabajadas"
    );
  }
};

/* 3.3 El 14 de febrero una persona desea comprarle un regalo al ser 
queri¬do que más aprecia en ese momento, su dilema radica en qué 
regalo puede hacerle, las alternativas que tiene son las siguientes:
   Regalo 	Costo 
   Tarjeta 	$10.00 o menos 
   Chocolates 	$11.00 a $100.00 
   Flores 	$101.00 a $250.00 
   Anillo 	Más de $251.00 
   Se requiere un diagrama de flujo con el algoritmo que ayude a 
   de¬terminar qué regalo se le puede comprar a ese ser tan especial 
   por el día del amor y la amistad. */
const regaloSanValetin = () => {
  let dineroDisponible = prompt(
    "Ingrese dinero disponioble para comprar regalo San Valentin"
  );

  if (dineroDisponible <= 10) {
    alert("Se sugiere regalar una Tarjeta de San Valentin");
  } else if (dineroDisponible > 10 && dineroDisponible <= 100) {
    alert("Se sugiere regalar Chocolates de San Valentin");
  } else if (dineroDisponible > 100 && dineroDisponible <= 250) {
    alert("Se sugiere regalar Flores de San Valentin");
  } else {
    alert("Se sugiere regalar un anillo de San Valentin");
  }
};

/* 3.4 El dueño de un estacionamiento requiere un diagrama de 
flujo con el algoritmo que le permita determinar cuánto debe 
cobrar por el uso del estacionamiento a sus clientes. Las tarifas 
que se tienen son las siguientes: 
   Las dos primeras horas a $5.00 c/u. 
   Las siguientes tres a $4.00 c/u. 
   Las cinco siguientes a $3.00 c/u. 
   Después de diez horas el costo por cada una es de dos pesos. */
const horasEstacionamiento = () => {
  let horasUso = parseInt(
    prompt("Ingrese las horas de uso del estacionamiento")
  );
  let horasPrimera = 5;
  let horasSegunda = 4;
  let horasTercer = 3;
  let horasFinal = 2;

  if (horasUso < 3) {
    horasTotal = horasUso * horasPrimera;
    console.log(horasUso);
    alert(
      "La tarifa por las " +
        horasUso +
        " horas de uso es de: " +
        horasTotal +
        " soles"
    );
  } else if (horasUso >= 3 && horasUso < 6) {
    let horasNueva = horasUso - 2;
    horasTotal = horasNueva * horasSegunda + 10;
    alert(
      "La tarifa por las " +
        horasUso +
        " horas de uso es de: " +
        horasTotal +
        " soles"
    );
  } else if (horasUso >= 6 && horasUso < 11) {
    let horasNueva = horasUso - 5;
    horasTotal = horasNueva * horasTercer + 22;
    alert(
      "La tarifa por las " +
        horasUso +
        " horas de uso es de: " +
        horasTotal +
        " soles"
    );
  } else {
    let horasNueva = horasUso - 10;
    horasTotal = horasNueva * horasFinal + 37;
    alert(
      "La tarifa por las " +
        horasUso +
        " horas de uso es de: " +
        horasTotal +
        " soles"
    );
  }
};

/* 3.5 Se tiene el nombre y la edad de tres personas. Se desea 
saber el nombre y la edad de la persona de menor edad. Realice 
el algoritmo correspondiente y represéntelo con un diagrama de 
flujo, pseudo¬código y diagrama N/S. */
const menorEdad = () => {
  let nombre1 = prompt("Ingrese el nombre de la primera persona");
  let edad1 = prompt("Ingrese la edad de la primera persona");
  let nombre2 = prompt("Ingrese el nombre de la segunda persona");
  let edad2 = prompt("Ingrese la edad de la segunda persona");
  let nombre3 = prompt("Ingrese el nombre de la tercera persona");
  let edad3 = prompt("Ingrese la edad de la tercera persona");

  if (edad1 < edad2) {
    if (edad1 < edad3) {
      alert(nombre1 + " es el de menor edad con " + edad1 + " años");
    }
  } else if (edad2 < edad3) {
    alert(nombre2 + " es el de menor edad con " + edad2 + " años");
  } else {
    alert(nombre3 + " es el de menor edad con " + edad3 + " años");
  }
};

/* 3.6 Realice el diagrama de flujo, el pseudocódigo y el diagrama 
N/S que muestren el algoritmo para determinar el costo y el descuento 
que tendrá un artículo. Considere que si su precio es mayor o igual 
a $200 se le aplica un descuento de 15%, y si su precio es mayor a 
$100 pero menor a $200, el descuento es de 12%, y si es menor a $100, 
sólo 10%. */
const descuentoProducto = () => {
  let costoArticulo = prompt("Ingrese el precio del producto");
  if (costoArticulo <= 100) {
    costoDescuento = costoArticulo - (costoArticulo * 10) / 100;
    alert(
      "El precio del producto es de " +
        costoArticulo +
        " soles y con un descuento del 10% quedando el precio en " +
        costoDescuento +
        " soles"
    );
  } else if (costoArticulo > 100 && costoArticulo < 200) {
    costoDescuento = costoArticulo - (costoArticulo * 12) / 100;
    alert(
      "El precio del producto es de " +
        costoArticulo +
        " soles y con un descuento del 12% quedando el precio en " +
        costoDescuento +
        " soles"
    );
  } else {
    costoDescuento = costoArticulo - (costoArticulo * 15) / 100;
    alert(
      "El precio del producto es de " +
        costoArticulo +
        " soles y con un descuento del 15% quedando el precio en " +
        costoDescuento +
        " soles"
    );
  }
};

/* 3.7 El presidente de la república ha decidido estimular a todos los 
es¬tudiantes de una universidad mediante la asignación de becas mensuales, 
para esto se tomarán en consideración los siguientes criterios: 
Para alumnos mayores de 18 años con promedio mayor o igual a 9, la beca 
será de $2000.00; con promedio mayor o igual a 7.5, de $1000.00; para los 
promedios menores de 7.5 pero mayores o igua¬les a 6.0, de $500.00; a los 
demás se les enviará una carta de invita-ción incitándolos a que estudien 
más en el próximo ciclo escolar. 
A los alumnos de 18 años o menores de esta edad, con promedios mayores o 
iguales a 9, se les dará $3000; con promedios menores a 9 pero mayores o 
iguales a 8, $2000; para los alumnos con prome¬dios menores a 8 pero mayores 
o iguales a 6, se les dará $100, y a los alumnos que tengan promedios menores 
a 6 se les enviará carta de invitación. Realice el algoritmo correspondiente 
y represéntelo con un diagrama de flujo. */
const promedioEstudiante = () => {
  let edadEstudiante = parseInt(prompt("Ingrese edad del estudiante"));
  let promedioNota = prompt("Ingrese la nota promedio del ciclo");

  if (edadEstudiante > 18) {
    if (promedioNota >= 9) {
      alert("El estudiante tiene una beca de $ 2000");
    } else if (promedioNota < 9 && promedioNota >= 7.5) {
      alert("El estudiante tiene una beca de $ 1000");
    } else if (promedioNota < 7.5 && promedioNota >= 6) {
      alert("El estudiante tiene una beca de $ 500");
    } else {
      alert(
        "El estudiante tiene una carta de invitacion para continuar sus estudios el proximo ciclo"
      );
    }
  } else {
    if (promedioNota >= 9) {
      alert("El estudiante tiene una beca de $ 3000");
    } else if (promedioNota < 9 && promedioNota >= 8) {
      alert("El estudiante tiene una beca de $ 2000");
    } else if (promedioNota < 8 && promedioNota >= 6) {
      alert("El estudiante tiene una beca de $ 100");
    } else {
      alert(
        "El estudiante tiene una carta de invitacion para continuar sus estudios el proximo ciclo"
      );
    }
  }
};

/* 3.8 Cierta empresa proporciona un bono mensual a sus trabajadores, 
el cual puede ser por su antigüedad o bien por el monto de su sueldo 
(el que sea mayor), de la siguiente forma: 
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 20 % 
de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el bono por 
concepto de sueldo, si éste es menor a $1000, se da 25 % de éste, cuando 
éste es mayor a $1000, pero menor o igual a $3500, se otorga 15% de su 
sueldo, para más de $3500. 10%. Realice el algoritmo correspondiente 
para calcular los dos tipos de bono, asig¬nando el mayor, y represéntelo 
con un diagrama de flujo y pseudo¬código. */
const bonoMensualTrabajador = () => {
  let bonoAntiguedad = 0;
  let bonoSueldo = 0;
  let antiguedadTrabajo = parseInt(
    prompt("Ingrese el tiempo de antiguedad del trabajador: ")
  );
  let sueldoTrabajador = prompt("Ingrese su sueldo actual: ");

  if (antiguedadTrabajo >= 2 && antiguedadTrabajo <= 5) {
    bonoAntiguedad = (sueldoTrabajador * 20) / 100;
  } else if (antiguedadTrabajo > 5) {
    bonoAntiguedad = (sueldoTrabajador * 30) / 100;
  }
  // else {
  //   alert(
  //     "Para beneficio del Bono, el tiempo de antiguedad es apartir de los 2 años a mas"
  //   );
  // }

  if (sueldoTrabajador <= 1000) {
    bonoSueldo = (sueldoTrabajador * 25) / 100;
  } else if (sueldoTrabajador > 1000 && sueldoTrabajador <= 3500) {
    bonoSueldo = (sueldoTrabajador * 15) / 100;
  } else if (sueldoTrabajador > 3500) {
    bonoSueldo = (sueldoTrabajador * 10) / 100;
  }

  if (bonoAntiguedad > bonoSueldo) {
    alert(
      "El bono correspondiente a su antiguedad es de: " +
        bonoAntiguedad +
        "\nEl bono correspondiente a su sueldo es de: " +
        bonoSueldo +
        "\n\nEl bono con monto mayor para su asignacion es de: " +
        bonoAntiguedad
    );
  } else if (bonoSueldo > bonoAntiguedad) {
    alert(
      "El bono correspondiente a su antiguedad es de: " +
        bonoAntiguedad +
        "\nEl bono correspondiente a su sueldo es de: " +
        bonoSueldo +
        "\n\nEl bono con monto mayor para su asignacion es de: " +
        bonoSueldo
    );
  }
};

/* 3.9 Una compañía de seguros para autos ofrece dos tipos de póliza: 
co¬bertura amplia (A) y daños a terceros (B). Para el plan A, la cuota 
base es de $1,200, y para el B, de $950. 
A ambos planes se les carga 10% del costo si la persona que conduce 
tiene por hábito beber alco¬hol, 5% si utiliza lentes, 5% si padece 
alguna enfermedad –como de¬ficiencia cardiaca o diabetes–, y si tiene 
más de 40 años, se le carga 20%, de lo contrario sólo 10%. Todos estos 
cargos se realizan sobre el costo base. Realice diagrama de flujo y 
diagrama N/S que repre¬sente el algoritmo para determinar cuánto le 
cuesta a una persona contratar una póliza. */
const companiaSeguro = () => {
  let polizaA = "Cobertura amplia (A)";
  let basePlanA = 1200;
  let polizaB = "Daños a terceros (B)";
  let basePlanB = 950;
  let contratoPolizaA,
    bebedorPolizaA,
    lentesPolizaA,
    enfermedadPolizaA,
    edadPolizaA = 0;
  let contratoPolizaB,
    bebedorPolizaB,
    lentesPolizaB,
    enfermedadPolizaB,
    edadPolizaB = 0;

  let bebeAlcohol = prompt(
    "El cliente tiene habito de beber alcohol? \nSI (S) o NO (N)"
  ).toUpperCase();
  let utilizaLentes = prompt(
    "El cliente utiliza lentes? \nSI (S) o NO (N)"
  ).toUpperCase();
  let padeceEnfermedad = prompt(
    "El cliente padece alguna enfermedad como Deficiencia Cardiaca o Diabetes"
  ).toUpperCase();
  let edadCliente = parseInt(prompt("Ingrese la edad del cliente: "));

  if (bebeAlcohol === "S") {
    console.log("hola bebedor");
    bebedorPolizaA = (basePlanA * 10) / 100;
    bebedorPolizaB = (basePlanB * 10) / 100;
    console.log("Contrato Poliza A - Bebedor: ", bebedorPolizaA);
    console.log("Contrato Poliza B - Bebedor: ", bebedorPolizaB);
  } else {
    console.log("hola NO bebedor");
    bebedorPolizaA = 0;
    bebedorPolizaB = 0;
    console.log("Contrato Poliza A - Bebedor: ", bebedorPolizaA);
    console.log("Contrato Poliza B - Bebedor: ", bebedorPolizaB);
  }

  if (utilizaLentes === "S") {
    console.log("hola cuatro ojos");
    lentesPolizaA = (basePlanA * 5) / 100;
    lentesPolizaB = (basePlanB * 5) / 100;
    console.log("Contrato Poliza A - Lentes: ", lentesPolizaA);
    console.log("Contrato Poliza B - Lentes: ", lentesPolizaB);
  } else {
    console.log("hola visor");
    lentesPolizaA = 0;
    lentesPolizaB = 0;
    console.log("Contrato Poliza A - Lentes: ", lentesPolizaA);
    console.log("Contrato Poliza B - Lentes: ", lentesPolizaB);
  }

  if (padeceEnfermedad === "S") {
    console.log("hola enfermo");
    enfermedadPolizaA = (basePlanA * 5) / 100;
    enfermedadPolizaB = (basePlanB * 5) / 100;
    console.log("Contrato Poliza A - Enfermo: ", enfermedadPolizaA);
    console.log("Contrato Poliza B - Enfermo: ", enfermedadPolizaB);
  } else {
    console.log("hola sano");
    enfermedadPolizaA = 0;
    enfermedadPolizaB = 0;
    console.log("Contrato Poliza A - Enfermo: ", enfermedadPolizaA);
    console.log("Contrato Poliza B - Enfermo: ", enfermedadPolizaB);
  }

  if (edadCliente > 40) {
    edadPolizaA = (basePlanA * 20) / 100;
    edadPolizaB = (basePlanB * 20) / 100;
  } else {
    edadPolizaA = (basePlanA * 10) / 100;
    edadPolizaB = (basePlanB * 10) / 100;
  }

  contratoPolizaA =
    basePlanA +
    bebedorPolizaA +
    lentesPolizaA +
    enfermedadPolizaA +
    edadPolizaA;
  contratoPolizaB =
    basePlanB +
    bebedorPolizaB +
    lentesPolizaB +
    enfermedadPolizaB +
    edadPolizaB;

};

/* 3.10 Represente un algoritmo mediante un diagrama de flujo y el pseu¬docódigo para determinar a qué lugar podrá ir de vacaciones una persona, considerando que la línea de autobuses “La tortuga” cobra por kilómetro recorrido. Se debe considerar el costo del pasaje tanto de ida, como de vuelta; los datos que se conocen y que son fijos son: México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800 km. También se debe considerar la posibilidad de tener que quedar¬se en casa. */

/* 3.11 Se les dará un bono por antigüedad a los empleados de una tien¬da. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y diagrama N/S que permita determinar el bono que recibirá un trabajador. */

/* 3.12 Realice un algoritmo que permita determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora, considerando que a partir de la hora número 41 y hasta la 45, cada hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar más de 50 horas no está permitido. Represente el algoritmo me¬diante el diagrama de flujo, el pseudocódigo y el diagrama N/S. */

/* 3.13 Los alumnos de una escuela desean realizar un viaje de estudios, pero requieren determinar cuánto les costará el pasaje, consideran¬do que las tarifas del autobús son las siguientes: si son más de 100 alumnos, el costo es de $20; si son entre 50 y 100, $35; entre 20 y 49, $40, y si son menos de 20 alumnos, $70 por cada uno. Realice el algoritmo para determinar el costo del pasaje de cada alumno. Represente el algoritmo mediante el diagrama de flujo, el pseudo¬código y el diagrama N/S. */

/* 3.14 Realice un algoritmo que, con base en una calificación proporciona¬da (0-10), indique con letra la calificación que le corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. Represente el diagrama de flujo, el pseudocódigo y el diagrama N/S correspon-diente. */

/* 3.15 Realice un algoritmo que, con base en un número proporcionado (1-7), indique el día de la semana que le corresponde (L-D). Re¬presente el diagrama de flujo, el pseudocódigo y el diagrama N/S correspondiente. */

/* 3.16 El secretario de educación ha decidido otorgar un bono por desem¬peño a todos los profesores con base en la puntuación siguiente:
   Puntos 	Premio 
   0 - 100 	1 salario 
   101 - 150 	2 salarios mínimos 
   151 - en adelante 	3 salarios mínimos 

Realice un algoritmo que permita determine el monto de bono que percibirá un profesor (debe capturar el valor del salario mínimo y los puntos del profesor). Represente el algoritmo mediante el dia¬grama de flujo, el pseudocódigo y el diagrama N/S. */

/* 3.17 Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S que permitan determinar qué paquete se puede comprar una persona con el dinero que recibirá en diciembre, considerando lo siguiente: 
   • Paquete A. Si recibe $50,000 o más se comprará una televisión, un modular, tres pares de zapatos, cinco camisas y cinco panta¬lones. 
   • Paquete B. Si recibe menos de $50,000 pero más (o igual) de $20,000, se comprará una grabadora, tres pares de zapatos, cinco camisas y cinco pantalones. 
   • Paquete C. Si recibe menos de $20,000 pero más (o igual) de $10,000, se comprará dos pares de zapatos, tres camisas y tres pantalones. 
   • Paquete D. Si recibe menos de $10,000, se tendrá que confor¬mar con un par de zapatos, dos camisas y dos pantalones.  */

/* 3.18 Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S que permitan determinar la can¬tidad del bono navideño que recibirá un empleado de una tienda, considerando que si su antigüedad es mayor a cuatro años o su suel¬do es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y en caso contrario sólo le corresponderá 20 % de éste. */

/* 3.19 La secretaria de salud requiere un diagrama de flujo que le represen¬te el algoritmo que permita determinar qué tipo de vacuna (A, B o C) debe aplicar a una persona, considerando que si es mayor de 70 años, sin importar el sexo, se le aplica la tipo C; si tiene entre 16 y 69 años, y es mujer, se le aplica la B, y si es hombre, la A; si es menor de 16 años, se le aplica la tipo A, sin importar el sexo. */

/* 3.20 Realice un algoritmo para resolver el siguiente problema: una fá¬brica de pantalones desea calcular cuál es el precio final de venta y cuánto ganará por los N pantalones que produzca con el corte de alguno de sus modelos, para esto se cuenta con la siguiente infor¬mación:
   a) Tiene dos modelos A y B, tallas 30, 32 y 36 para ambos modelos. 
   b) Para el modelo A se utiliza 1.50 m de tela, y para el B 1.80 m. 
   c) Al modelo A se le carga 80 % del costo de la tela, por mano de obra. Al modelo B se le carga 95 % del costo de la tela, por el mismo concepto.
   d) A las tallas 32 y 36 se les carga 4 % del costo generado por mano de obra y tela, sin importar el modelo. 
   e) Cuando se realiza el corte para fabricar una prenda sólo se hace de un solo modelo y una sola talla. 
   f) Finalmente, a la suma de estos costos se les carga 30%, que representa la ganancia extra de la tienda.  */

/* 3.21 El banco “Bandido de peluche” desea calcular para uno de sus clien¬tes el saldo actual, el pago mínimo y el pago para no generar in¬tereses. Los datos que se conocen son: saldo anterior del cliente, monto de las compras que realizó y el pago que depositó en el corte anterior. Para calcular el pago mínimo se debe considerar 15% del saldo actual, y para no generar intereses corresponde 85% del saldo actual, considerando que este saldo debe incluir 12% de los intere¬ses causados por no realizar el pago mínimo y $200 por multa por el mismo motivo. Realice el algoritmo correspondiente y represéntelo mediante el diagrama de flujo y pseudocódigo. */
