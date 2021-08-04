/* IMPORTS */

/* LOCATING ELEMENTS IN THE DOM */

/* FUNCTIONALITIES */

function getEventsSection() {
  document.getElementById("ex-02-js-btn").addEventListener("click", () => {alert("You just clicked me!")})
  $("#ex-02-jquery-btn").on("click", () => {alert("You just clicked me!")})
}

function getFunctionSection() {

}

export { getEventsSection, getFunctionSection }