async function getPokemonList() {
  try {
    const respones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await respones.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
// console.log(getPokemonList()); 

const pokemonsContainer=document.getElementById("characters-card")
const pokemonsImg=document.getElementById("characters-cards-img")
const pokemonName=document.getElementById("characters-card-name")
const pokemonP=document.getElementById("characters-card-p")
async function displayPokemon() {
    const pokemons=getPokemonList()

    pokemons.forEach((pokemon)=>{
        
        pokemonName.textContent=pokemon.name
    });
    pokemonsContainer.appendChild(pokemonName)
    console.log(displayPokemon());

}
