const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("todo bien cumpli tu promesa");
  }, 3000);
});

async function getDataFromPromise() {
  const respuesta = await promesa;
  console.log(respuesta);
}

getDataFromPromise();

promesa.then((respuesta) => {
  console.log("then", respuesta);
});
