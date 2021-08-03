/* IMPORT */

// import {  } from ""

/* LOCATING ELEMENTS IN THE DOM */

const NEXTBTN = $("#next-btn")
const PREVIOUSBTN = $("#previous-btn")

/* FUNCTIONALITIES */

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
  showMovementButtons,
  hideMovementButtons
}