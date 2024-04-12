async function getPokemonList() {
  try {
    const respones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await respones.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

const pokemonsContainer = document.getElementById("characters-card");
const pokemonsImg = document.getElementById("characters-cards-img");
const pokemonP = document.getElementById("characters-card-p");


async function getPokemonDetails(name) {
  try {
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await respone.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


async function displayPokemon() {
  const pokemons = await getPokemonList();
  pokemons.forEach( async(pokemon) => {
    const data=await getPokemonDetails(pokemon.name)
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const pokemonCard=document.createElement("div")
    const pokemonName = document.createElement("p");
    const pokemonType = document.createElement("p");
    const pokemonsImg = document.createElement("img");
    pokemonCard.className="pokemon-card"
    pokemonsImg.className = "card-img";
    pokemonType.className = "card-Type";
    pokemonName.className = "card-p";

    pokemonName.textContent = pokemon.name;
    pokemonsImg.src= data.sprites.front_default

    
    pokemonsContainer.appendChild(cardContainer);
    cardContainer.appendChild(pokemonCard) 
    pokemonCard.appendChild(pokemonsImg)
    pokemonCard.appendChild(pokemonName);
    

    cardContainer.addEventListener("click", () => {
      window.location.href = `./details-list.html?name=${pokemon.name}`;
    });
  });
}

displayPokemon();
