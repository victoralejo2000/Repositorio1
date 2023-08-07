/* 2.1 Realice un diagrama de flujo y pseudocódigo que representen el algo¬ritmo para obtener el área de un triángulo. */
const areaTringulo = () => {
  let b = parseInt(prompt("Ingresa la base del triangulo:"));
  let h = parseInt(prompt("Ingresa la altura del triangulo:"));
  let s = (b * h) / 2;
  alert("El area del triangulo es: " + s);
};

/* 2.2 Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero mexicano. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin. */
const cambioDolarMex = () => {
  let monPesosMex = parseInt(prompt("Ingrese cantidad de moneda mexicana"));
  let monDolarUsa = parseInt(
    prompt("Ingresa el tipo de cambio en dolares americanos:")
  );
  let totalCambio = monPesosMex / monDolarUsa;
  alert(
    "La cantidad de dolares que se puede adquir con " +
      monPesosMex +
      " pesos mexicanos es de " +
      totalCambio +
      " dolares."
  );
};

/* 2.3 Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entre¬vista sólo se les pregunta el año en que nacieron. 
   Realice el diagrama de flujo y pseudocódigo que representen el algoritmo para solucionar este problema. */
const contratoPersonal = () => {
  let fechaActual = new Date();
  let anioActual = fechaActual.getFullYear();
  let anioNacimiento = parseInt(prompt("Ingresa el año de nacimiento:"));
  let edadActual = anioActual - anioNacimiento;
  alert("La edad actual del trabajador es: " + edadActual);
};

/* 2.4 Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. 
   Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas y realice un diagrama de flujo y pseudocódigo que repre-senten el algoritmo que permita determinar el cobro. */
const cobroEstacionamiento = () => {
  let tiempoUtilizado = prompt(
    "Ingresa el tiempo utilizado del estacionamiento:"
  );
  let precioHora = parseInt(prompt("Ingresa el costo por hora o fraccion"));
  let horaCobro = Math.ceil(tiempoUtilizado) * precioHora;
  alert(
    "El monto a pagar sobre " +
      tiempoUtilizado +
      " horas es de " +
      horaCobro +
      " soles"
  );
};

/* 2.5 Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que se cobra por m2 y realice un dia¬grama de flujo y pseudocódigo que representen el algoritmo. */
const brochaGorda = () => {
  let metroCuadrado = prompt("Ingrese los metros cuadrados que desea pintar:");
  let precioCobrar = prompt("Ingrese precio por metro cuadrado");
  let montoCobrar = metroCuadrado * precioCobrar;
  alert(
    "El monto a cobrar por pintar " +
      metroCuadrado +
      " m2, es de " +
      montoCobrar +
      " soles"
  );
};

/* 2.6 Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo sería el diagrama de flujo y el pseudocódigo que representen el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene que: C2 = A2 + B2. */
const hipotenusaTriangulo = () => {
  let catetoA = parseInt(prompt("Ingresa el cateto A:"));
  let catetoB = parseInt(prompt("Ingresa el cateto B:"));
  let hipoTriangulo = Math.hypot(catetoA, catetoB);
  alert("La hipotenusa del triangulo rectangulo es: " + hipoTriangulo);
};

/* 2.7 La compañía de autobuses “La curva loca” requiere determinar el cos¬to que tendrá el boleto de un viaje sencillo, esto basado en los kilóme¬tros por recorrer y en el costo por kilómetro. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin. */
const curvaLoca = () => {
  let kmRecorrido = prompt("Ingrese los kilometros recorridos:");
  let costoKm = prompt("Ingrese costo por kilometro");
  let costoBoleto = kmRecorrido * costoKm;
  alert("El costo del boleto es de: " + costoBoleto + " soles");
};

/* 2.8 Se requiere determinar el tiempo que tarda una persona en llegar de una ciudad a otra en bicicleta, considerando que lleva una velocidad constante. Realice un diagrama de flujo y pseudocódigo que repre¬senten el algoritmo para tal fin. */
const tiempoBicicleta = () => {
  let distaciaRecorrido = prompt(
    "Ingrese la distancia recorrida en bicicleta:"
  );
  let velocidadConstante = prompt(
    "Ingresa a que velocidad constante que recorria"
  );
  let tiempoRecorrido = distaciaRecorrido * velocidadConstante;
  alert("El tiempo recorrido es de " + tiempoRecorrido + " minutos");
};

/* 2.9 Se requiere determinar el costo que tendrá realizar una llamada te¬lefónica con base en el tiempo que dura la llamada y en el costo por minuto. Realice un diagrama de flujo y pseudocódigo que represen¬ten el algoritmo para tal fin. */
const llamadaTelefonica = () => {
  let tiempoLlamada = prompt("Ingrese el tiempo de duracion de la llamada:");
  let costoMinuto = prompt("Ingresa costo por minuto");
  let costoLlamada = tiempoLlamada * costoMinuto;
  alert("El costo de la llamada es: " + costoLlamada + " soles");
};

/* 2.10 La CONAGUA requiere determinar el pago que debe realizar una persona por el total de metros cúbicos que consume de agua. Reali¬ce un diagrama de flujo y pseudocódigo que representen el algorit¬mo que permita determinar ese pago. */
const consumoConagua = () => {
  let costoAgua = prompt("Ingrese el costo por metro cubico:");
  let cantidadAgua = prompt("Ingresa cantidad de metros cubicos utilizados");
  let pagoAgua = costoAgua * cantidadAgua;
  alert("El costo de consumo de agua es de : " + pagoAgua + " soles");
};

/* 2.11 La compañía de luz y sombras (CLS) requiere determinar el pago que debe realizar una persona por el consumo de energía eléctrica, la cual se mide en kilowatts (KW). Realice un diagrama de flujo y pseudocódigo que representen el algoritmo que permita determi¬nar ese pago. */
const consumoCls = () => {
  let costoLuz = prompt("Ingrese el costo por Kilowatt (kw):");
  let cantidadLuz = prompt("Ingresa consumo energia electrica utilizados");
  let pagoLuz = costoLuz * cantidadLuz;
  alert("El costo de consumo de luz es de : " + pagoLuz + " soles");
};

/* 2.12 Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar cuánto pagará finalmente una persona por un artículo equis, considerando que tiene un descuento de 20%, y debe pagar 15% de IVA (debe mostrar el precio con descuento y el precio final). */
const dsctoProducto = () => {
  let precioArticulo = prompt("Ingrese precio del acticulo");
  let cantidadDescuento = prompt("Ingrese cantidad de descuento del articulo");
  let cantidadIva = prompt("Ingrese monto del impuesto (IVA)");
  let pagoDescuento =
    precioArticulo - (precioArticulo * cantidadDescuento) / 100;
  let pagoIva = pagoDescuento + (pagoDescuento * cantidadIva) / 100;
  alert("El precio del articulos es: " + precioArticulo + " soles \nEl precio con el descuento es: " + pagoDescuento + " soles \nEl precio con el IVA es: " + pagoIva + " soles");
};

/* 2.13 Realice un diagrama de flujo y pseudocódigo que representen el al¬goritmo para determinar cuánto dinero ahorra una persona en un año si considera que cada semana ahorra 15% de su sueldo (consi¬dere cuatro semanas por mes y que no cambia el sueldo). */

/* 2.14 Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que tendrá que ir por equis número de días a la ciudad de Monterrey; los gastos que cubre la empresa son: hotel, comida y 100.00 pesos diarios para otros gas¬tos. El monto debe estar desglosado para cada concepto. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo que determine el monto del cheque. */

/* 2.15 Se desea calcular la potencia eléctrica de circuito de la figura 2.6. Rea¬lice un diagrama de flujo y el pseudocódigo que representen el algo¬ritmo para resolver el problema. Considere que: P = V*I y V = R*I. */

/* 2.16 Realice pseudocódigo y diagrama de flujo que representen el algo¬ritmo para preparar una torta. */

/* 2.17 Realice pseudocódigo y diagrama de flujo que representen el algo¬ritmo para confeccionar una prenda de vestir. */

/* 2.18 Realice pseudocódigo y diagrama de flujo que representen el algo¬ritmo para preparar un pastel. */

/* 2.19 Realice el diagrama de flujo y pseudocódigo que representen el algo¬ritmo para encontrar el área de un cuadrado. */

/* 2.20 Realice el diagrama de flujo y pseudocódigo que representen el al¬goritmo para determinar el promedio que obtendrá un alumno con¬siderando que realiza tres exámenes, de los cuales el primero y el segundo tienen una ponderación de 25%, mientras que el tercero de 50%. */

/* 2.21 Realice un diagrama de flujo y pseudocódigo que representen el al¬goritmo para determinar aproximadamente cuántos meses, sema¬nas, días y horas ha vivido una persona. */

/* 2.22 Se requiere un algoritmo para determinar el costo que tendrá rea¬lizar una llamada telefónica con base en el tiempo que dura la lla¬mada y en el costo por minuto. Represente la solución mediante el diagrama de flujo y pseudocódigo. */

/* 2.23 El hotel “Cama Arena” requiere determinar lo que le debe cobrar a un huésped por su estancia en una de sus habitaciones. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar ese cobro. */
