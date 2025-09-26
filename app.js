const pokemon = require('./data.js');

const game = {
    difficulty: [ 'Med' ],
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

console.log(game.difficulty)

let starterPokemon = pokemon.filter (pokemon => 
    pokemon.starter === true);
if (starterPokemon) {
    game.party.push(starterPokemon)
}
 console.log(game.party);

const selectedPokemon = pokemon.slice (110, 113);
if (selectedPokemon){
game.party.push(selectedPokemon)
}

console.log(game.party);

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log (game.gyms)




//console.dir(pokemon, { maxArrayLength: null })