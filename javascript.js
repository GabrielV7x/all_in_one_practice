
// when click on a pokemon type, background color of the matching pokemon type change.

const electric = document.querySelectorAll('.electric');   // select pokemon by type
const buttonElectric = document.querySelector('.btn_electric') //create a button to listen to the event
buttonElectric.addEventListener("click", changeColor)      // add event event on button to listen


const fire = document.querySelectorAll('.fire');      // select pokemon by type
const buttonFire = document.querySelector('.btn_fire') //create a button to listen to the event
buttonFire.addEventListener("click", changeColor)

pokemons = ''


function changeColor() {
  console.log(this.id)                           // function called, forEach loop used to acces each pokemon to apply class changes.
  if (this.id === "electric") {
    pokemons = document.querySelectorAll('.electric')
  } else {
    pokemons = document.querySelectorAll('.fire')
  }

  pokemons.forEach(pokemon => {
    const color = pokemon.getAttribute("data-color")
    // console.log(color)
    pokemon.classList.toggle(color);
    console.log("changeColor called")
  });
}
