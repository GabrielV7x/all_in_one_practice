
// when click on a pokemon type, background color of the matching pokemon type change.

// select pokemon by type
const electric = document.querySelectorAll('.electric');

//create a button to listen to the event
const buttonElectric = document.querySelector('.btn_electric')

// add event event on button to listen
buttonElectric.addEventListener("click", changeColor)

// function called, forEach loop used to acces each pokemon to apply class changes.
function changeColor() {
  electric.forEach(pokemon => {
    const color = pokemon.getAttribute("data-color")
    // console.log(color)
    pokemon.classList.toggle(color);
    console.log("changeColor function has been called")
  });
}
