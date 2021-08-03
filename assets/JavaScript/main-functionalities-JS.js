/* IMPORTS */

import { homeHTML, eventsHTML, functionsHTML } from "./JavaScript-content.js"

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = document.getElementById("header-logo")
const HOMEBTN = document.getElementById("home-btn")
const EVENTSBTN = document.getElementById("events-btn")
const FUNCTIONSBTN = document.getElementById("functions-btn")
const SECTIONJS = document.getElementById("javascript-section")

/* EVENT LISTENERS */
// ? REFACTOR (IN FUNCTION) PENDING

window.addEventListener("load", () => {
  changeHTML("home")
})

LOGOBTN.addEventListener("click", () => {
  changeHTML("home")
})

HOMEBTN.addEventListener("click", () => {
  changeHTML("home")
})

EVENTSBTN.addEventListener("click", () => {
  changeHTML("events")
})

FUNCTIONSBTN.addEventListener("click", () => {
  changeHTML("functions")
})


/* FUNCTIONALITY */

function changeHTML(page) {
  if (page === "home") {
    SECTIONJS.innerHTML = homeHTML
  } else if (page === "events") {
    SECTIONJS.innerHTML = eventsHTML
  } else if (page === "functions") {
    SECTIONJS.innerHTML = functionsHTML
  }
}