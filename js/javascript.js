
// when click on a button, the background color of the pokemons with the matching element type shouls change.

const buttonElectric = document.querySelector('.btn_electric');    //create a button to listen to the event
buttonElectric.addEventListener("click", changeColor);            // add event event on button to listen

const buttonFire = document.querySelector('.btn_fire');
buttonFire.addEventListener("click", changeColor);

const buttonPlant = document.querySelector('.btn_plant');
buttonPlant.addEventListener("click", changeColor);


function changeColor() {
  if (this.id === "electric") {
    pokemons = document.querySelectorAll('.electric');
  } else if (this.id === "fire"){
    pokemons = document.querySelectorAll('.fire');
  } else {
    pokemons = document.querySelectorAll('.plant');
  };

  pokemons.forEach(pokemon => {                             // function called, forEach loop used to acces each pokemon to apply class changes.
    const color = pokemon.getAttribute("data-color");
    pokemon.classList.toggle(color);
  });
};
