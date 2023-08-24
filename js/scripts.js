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
let maxHeight = 15;
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > maxHeight) {document.write(`${pokemonList[i].name}  (height: ${pokemonList[i].height}) -wow , that big!`);
  } else {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`);
  }
  }


