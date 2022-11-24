
// when click on a pokemon type, background color of the matching pokemon type change.

// select pokemon by type
const electric = document.querySelectorAll('.electric');
// console.log(electric)

//create a button to listen to the event
const buttonElectric = document.querySelector('.btn_electric')
// console.log(buttonElectric)

// add event event on button to listen
buttonElectric.addEventListener("click", changeColor)

// function called, forEach loop used to acces each pokemon to apply class changes.
function changeColor() {
  electric.forEach(pokemon => {
    pokemon.classList.toggle('yellow');
    console.log("changeColor function has been called")
  });

}
