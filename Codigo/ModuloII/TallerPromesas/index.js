var img = document.createElement('img');
var linkSvg = '';
(async function (){
    try{
        async function pokemon(type,namePokemon){
            const tipo = await fetch(`https://pokeapi.co/api/v2/type/ ${type}  /`, { method: "GET" });
            const img = await fetch(`https://pokeapi.co/api/v2/pokemon/"  ${namePokemon}/`);
            let datatypes = await tipo
        }
    }
})()
function traerImagen(namePokemon) {
    try{

    }
  fetch("https://pokeapi.co/api/v2/pokemon/" + namePokemon + "/")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // console.log(datos)
      linkSvg = datos.sprites.other.dream_world.front_default;
      if (linkSvg === null) {
        linkSvg = datos.sprites.back_default;
        if (linkSvg === null) {
          // console.log(linkSvg = datos.sprites)
          linkSvg = datos.sprites.front_default;
          if (linkSvg === null) {
            linkSvg = "./noExistePokemon.png";
          }
        }
      }
    })
    .catch((error) => console.error(error));
    return (`<div><img src="${linkSvg}"></div>`);
}
function imgPokemon(linkSvg){
    return (`<div><img src="${linkSvg}"></div>`);
}
linkSvg.forEach((img)=>{
    const x = img.pokemon(img); 
    console.log(x)
})
console.log(traerImagen('pikachu'));
function buscar() {
  let type = document.getElementById("seleccion_tipo_pokemon").value;
  // let linkSvg = traerImagen(namePokemon);
  // console.log(linkSvg);
  fetch("https://pokeapi.co/api/v2/type/" + type + "/", { method: "GET" })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      let contenedor = document.getElementById("contenido");
      lista = datos.pokemon;
      valor = lista.length;
      contador = 0;

      lista.forEach((dato) => {
        let divContenedor = document.getElementById("contenido");
        console.log(traerImagen(dato.pokemon.name));
        let divContenedorPokemon = document.createElement("div");
        divContenedorPokemon.className = "contenedorPokemon";
        let p = document.createElement("p");
        p.innerText = dato.pokemon.name;
        divContenedorPokemon.appendChild(imgPokemon);
        divContenedorPokemon.appendChild(p);
        divContenedor.appendChild(divContenedorPokemon);
        contador += 1;
      });
    })
    .catch((error) => console.error(error));
}

// Contenedor, img, b
