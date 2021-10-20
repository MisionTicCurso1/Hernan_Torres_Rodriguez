
function buscar() {
  var type = document.getElementById("seleccion_tipo_pokemon").value;
  for (let i = 1; i <= 1118; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, { method: "GET" })
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      let list = data.types;
      list.forEach((xx) => {
        if (xx.type.name === type) {
          // let nombrePokemon = data.name;
          let imgSrc = data.sprites.back_default;
          let divContenedor = document.getElementById("contenido");
          let divContenedorPokemon = document.createElement("div");
          let imgPokemon = document.createElement('img')
          imgPokemon.src = imgSrc;
          divContenedorPokemon.className = "contenedorPokemon";
          let p = document.createElement("p");
          p.innerText = data.name;
          divContenedorPokemon.appendChild(imgPokemon);
          divContenedorPokemon.appendChild(p);
          divContenedor.appendChild(divContenedorPokemon);
        }
      });
      console.log(data.count)
    }).catch((error) => console.error(error));
  }
}
