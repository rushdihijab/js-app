
let pokemonRepository = (function () {

let pokemonList =[
  {
    name: "Bulbasaur",
    height: 7,
    types:['grass', 'poison']
  },
  {
  name: "Ivysaur",
  height: 10, 
  types:['grass', 'poison']
  },
  {
  name: "Venusaur", 
  height: 20, 
  types:['grass', 'poison']
} 
];

function getAll () {
  return pokemonList;
}


function add (pokemon) {
  if (typeof pokemon !== 'object') {
    return "You can only add objects to the pokemonList"
  }
  //  This expression checks if the pokemon object does not have the property name. The ! operator negates the result of the hasOwnProperty() method, so if hasOwnProperty() returns true, the expression will evaluate to false, and vice versa.
  if (!pokemon.hasOwnProperty('name') || !pokemon.hasOwnProperty('height') || !pokemon.hasOwnProperty('types')) {
    return "The pokemon object you are trying to add is missing required keys"
  }
  pokemonList.push(pokemon)
  return "Pokemon added successfully"
}

function findByName(name){
  // line starts a for...of loop that iterates through the pokemonList array. Each iteration assigns the current element of the array to the variable pokemon.
  for (let pokemon of pokemonList) {
    // This line checks if the name property of the current Pokémon object (pokemon) matches the provided name parameter. The === operator checks for strict equality, ensuring that both the values and types are equal.
    if (pokemon.name === name) {
      return pokemon
    }
  }
  return null
}


return {
  getAll: getAll,
  add: add,
  findByName: findByName
}

})()

console.log(pokemonRepository.getAll());
let maxHeight = 15;
let pokemonList = pokemonRepository.getAll();


  // for (let i = 0; i < pokemonList.length; i++) {
  //   if (pokemonList[i].height > maxHeight) {document.write(`${pokemonList[i].name}  (height: ${pokemonList[i].height}) -wow , that big!`);
  // } else {
  //   document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`);
  // }
  // }

  pokemonList.forEach(function(pokemon) {
    if (pokemon.height > maxHeight) {document.write(` ${pokemon.name} (height: ${pokemon.height} wow!! , that dig!) `);
  } else {
    document.write(` ${pokemon.name} (height: ${pokemon.height})`);
  }  
  });

