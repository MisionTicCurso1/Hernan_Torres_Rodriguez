function buscar() {
  let loader = document.getElementById('loader');
  loader.style.display = 'block';
  // fetch(`https://pokeapi.co/api/v2/pokemon/`, { method: "GET" })
  //   .then((respuesta) => {
  //     return respuesta.json();
  //   })
  //   .then((data) => {
  //     totalPokemones = data.count;
  //   });
  var type = document.getElementById("seleccion_tipo_pokemon").value;
  for (let i = 1; i <= 1100; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, { method: "GET" })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        let list = data.types;
        // console.log(data)
        list.forEach((xx) => {
          if (xx.type.name === type) {
            let imgSrc = data.sprites.front_default;
            let divContenedor = document.getElementById("contenido");
            let divContenedorPokemon = document.createElement("div");
            let imgPokemon = document.createElement("img");
            imgPokemon.src = imgSrc;
            divContenedorPokemon.className = "contenedorPokemon";
            let p = document.createElement("p");
            p.innerText = data.name;
            divContenedorPokemon.appendChild(imgPokemon);
            divContenedorPokemon.appendChild(p);
            divContenedor.appendChild(divContenedorPokemon);
            if(type == 'bug'){
              divContenedorPokemon.style.background = 'green';
            }else if(type === 'dragon'){
              divContenedorPokemon.style.background = '#7060e0';

            }else if(type === 'electric'){
              divContenedorPokemon.style.background = '#f8d030';
              
            }else if(type === 'fairy'){
              divContenedorPokemon.style.background = '#ffb0ff';
              p.style.color = 'black';
              
            }else if(type === 'fighting'){
              divContenedorPokemon.style.background = '#98a8f0';
              
            }else if(type === 'fire'){
              divContenedorPokemon.style.background = '#f05030';
              
            }else if(type === 'ghost'){
              divContenedorPokemon.style.background = '#6060b0';
              
            }else if(type === 'grass'){
              divContenedorPokemon.style.background = '#78c850';
              
            }else if(type === 'ground'){
              divContenedorPokemon.style.background = '#d0b058';
              
            }else if(type === 'ice'){
              divContenedorPokemon.style.background = '#d0b058';
              
            }else if(type === 'normal'){
              divContenedorPokemon.style.background = 'gray';
              
            }else if(type === 'poison'){
              divContenedorPokemon.style.background = '#b050a0';
              
            }else if(type === 'physical'){
              divContenedorPokemon.style.background = '#f870a0';
              
            }else if(type === 'Rock'){
              divContenedorPokemon.style.background = '#b8a058';
              
            }else if(type === 'steel'){
              divContenedorPokemon.style.background = '##a8a8c0';
              
            }
            else if(type === 'water'){
              divContenedorPokemon.style.background = '#3899f8';
              
            }
            else if(type === 'dark'){
              divContenedorPokemon.style.background = '#705848';
              
            }
            loader.style.display = 'none';
          }
        });
      });
  }
}
