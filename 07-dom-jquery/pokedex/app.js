var pokemonNameField = document.getElementById('pokemon-name');
var addBtn = document.getElementById('add-pokemon');
var pokemonList = document.getElementById('pokemon-list');

// console.log(pokemonNameField);
// console.log(addBtn);
// console.log(pokemonList);

addBtn.onclick = function() {
  var newListItem = document.createElement('li');
  newListItem.innerHTML = pokemonNameField.value;
  // console.log(newListItem);
  pokemonList.appendChild(newListItem)
};
