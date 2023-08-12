// querySelector y All son loshermanos menores 


//ambas funciones me permit poder usar elemetnos de html en js
//querySelector solo devuelve 1 elemento 

//querySelectorAll devuelvo tosdo los elemento que cumplan con el mimo nombre declarado 


//clases

const inputName = document.querySelector(".input_name")
console.log(inputName)

// con id

const inputEmail = document.querySelector("#input_email")
console.log(inputEmail)

// con tagName

const inputs = document.querySelector("form")
console.log(inputs)