

const electric = document.querySelector('.electric');
console.log(electric)


electric.addEventListener("click", changeColor);

function changeColor() {
  electric.classList.add('yellow');
  console.log("changeColor function has been called")
}
