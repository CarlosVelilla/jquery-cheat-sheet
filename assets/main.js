/* IMPORT */

// import {  } from ""

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = $("#header-logo")
const HOMEBTN = $("#home-btn")
const EVENTSBTN = $("#events-btn")
const FUNCTIONSBTN = $("#functions-btn")

const NEXTBTN = $("#next-btn")
const PREVIOUSBTN = $("#previous-btn")

/* FUNCTIONALITIES */

$(window).on("load", () => {
  hideMovementButtons()
})

LOGOBTN.on("click", () => {
  hideMovementButtons()
})

HOMEBTN.on("click", () => {
  hideMovementButtons()
})

EVENTSBTN.on("click", () => {
  showMovementButtons()
})

FUNCTIONSBTN.on("click", () => {
  showMovementButtons()
})

function showMovementButtons() {
  NEXTBTN.show()
  PREVIOUSBTN.show()
}

function hideMovementButtons() {
  NEXTBTN.hide()
  PREVIOUSBTN.hide()
}

/* EXPORT */

export {
  LOGOBTN, HOMEBTN, EVENTSBTN, FUNCTIONSBTN
}