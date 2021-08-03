/* IMPORTS */

import { homeHTML, eventsHTML, functionsHTML } from "./JavaScript-content.js"
import { showMovementButtons, hideMovementButtons } from "../main.js"

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = document.getElementById("header-logo")
const HOMEBTN = document.getElementById("home-btn")
const EVENTSBTN = document.getElementById("events-btn")
const FUNCTIONSBTN = document.getElementById("functions-btn")
const SECTIONJS = document.getElementById("javascript-section")

/* EVENT LISTENERS */
// ? REFACTOR (IN FUNCTION) PENDING

window.addEventListener("load", () => {
  hideMovementButtons()
  changeJsHtml("home")
})

LOGOBTN.addEventListener("click", () => {
  hideMovementButtons()
  changeJsHtml("home")
})

HOMEBTN.addEventListener("click", () => {
  hideMovementButtons()
  changeJsHtml("home")
})

EVENTSBTN.addEventListener("click", () => {
  showMovementButtons()
  changeJsHtml("events")
})

FUNCTIONSBTN.addEventListener("click", () => {
  showMovementButtons()
  changeJsHtml("functions")
})

/* FUNCTIONALITY */

function changeJsHtml(page) {
  if (page === "home") {
    SECTIONJS.innerHTML = homeHTML
  } else if (page === "events") {
    SECTIONJS.innerHTML = eventsHTML
  } else if (page === "functions") {
    SECTIONJS.innerHTML = functionsHTML
  }
}