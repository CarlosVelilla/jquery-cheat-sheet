/* IMPORTS */

import { homeHTML, eventsHTML, functionsHTML } from "./JavaScript-content.js"

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = document.getElementById("header-logo")
const HOMEBTN = document.getElementById("home-btn")
const EVENTSBTN = document.getElementById("events-btn")
const FUNCTIONSBTN = document.getElementById("functions-btn")
const SECTIONJS = document.getElementById("javascript-section")

/* FUNCTIONALITIES */

window.addEventListener("load", () => {
  changeJsHtml("home")
})

LOGOBTN.addEventListener("click", () => {
  changeJsHtml("home")
})

HOMEBTN.addEventListener("click", () => {
  changeJsHtml("home")
})

EVENTSBTN.addEventListener("click", () => {

  changeJsHtml("events")
})

FUNCTIONSBTN.addEventListener("click", () => {

  changeJsHtml("functions")
})

function changeJsHtml(page) {
  if (page === "home") {
    SECTIONJS.innerHTML = homeHTML
  } else if (page === "events") {
    SECTIONJS.innerHTML = eventsHTML
  } else if (page === "functions") {
    SECTIONJS.innerHTML = functionsHTML
  }
}