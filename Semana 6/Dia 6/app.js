//realizaremos la logica del poekdex

const pokemonContainer = document.querySelector("#row-pokemones");

const pokemonName = document.querySelector("#pokemon-name");
const pokemonImage = document.querySelector("#pokemon-img");
const pesoPokemon= document.querySelector("#peso-pokemon");
//haremos la funcion que trae lso datos del api

//tine que usar fecth
const obtenerPokemones = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100%22"
  );
  const data = await response.json();
  console.log("imprimo pokemon", data.results);
  setpokemonsView(data.results);
};

//amos a crear la funcion que pinte los pokemones en el navegador

const setpokemonsView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  results.map(async (result, index) => {
    //por cada iteracion crea la variable html

    const html = `
        <div class ="col-md-3 mt-3">
        <div class ="card">
        <img 
        class ="card-img-top mt-2"
        width="100"
        height="100"
        src = "${imgUrl}${index + 1}.svg"
        <div class ="card-body text-center">
        <h6 class="text-title">N.${index + 1}</h6>
        <h4 class = "text-title">${result.name}</h4>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalPokemon" onclick='obtenerDetalle("${result.url}")';>Detalle</button>
        </div>
        </div>
        </div>`;
    //vamos a inserta al navegador
    pokemonContainer.innerHTML += html;
  });
};

const obtenerDetalle = async (url) => {
  const response = await fetch(url)
  const data = await response.json();
  console.log("detalle",data)
  
  pokemonName.innerHTML=data.name
  pokemonImage.src=data.sprites.other.home.front_default;
  pesoPokemon.innerHTML=data.weight
//   habilidadesPokemon.innerHTML=
//   tipoPokemon.innerHTML
};

// const btnDatosPokemon=pokemonContainer;
// btnDatosPokemon.onclick=()=>{
//     Swal.fire({
//         imageUrl: 'src',
//         imageWidth: 400,
//         imageHeight: 400,
//         imageAlt: 'Custom image',
//       })
// }

obtenerPokemones();

// const cargarPokemon = async () => {
//   const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//   const datos = await respuesta.json();
//   console.log(datos);

//   let listaPokemon = '';
//   datos.results.forEach(pokedesk => {
//      console.log(pokedesk.index);

//     codigoPokemon=1;
//     listaPokemon += `
//         <div class="pokemon">
//         <img class="poster" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${codigoPokemon}.svg">
//             <h3 class="titulo">${pokedesk.name}</h3>
//         </div>
//     `;
// });
// document.getElementById('contenedor').innerHTML = listaPokemon;

// };

// cargarPokemon();
