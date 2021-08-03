/* IMPORTS */

import { homeHTML, eventsHTML, functionsHTML } from "./jQuery-content.js"

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = $("#header-logo")
const HOMEBTN = $("#home-btn")
const EVENTSBTN = $("#events-btn")
const FUNCTIONSBTN = $("#functions-btn")
const SECTIONJQUERY = $("#jquery-section")

/* EVENT LISTENERS */
// ? REFACTOR (IN FUNCTION) PENDING

$(window).on("load", () => {
  changeHTML("home")
})

LOGOBTN.on("click", () => {
  changeHTML("home")
})

HOMEBTN.on("click", () => {
  changeHTML("home")
})

EVENTSBTN.on("click", () => {
  changeHTML("events")
})

FUNCTIONSBTN.on("click", () => {
  changeHTML("functions")
})

/* FUNCTIONALITY */

function changeHTML(page) {
  if (page === "home") {
    SECTIONJQUERY[0].innerHTML = homeHTML // ! ARRAY?
  } else if (page === "events") {
    SECTIONJQUERY[0].innerHTML = eventsHTML // ! ARRAY?
  } else if (page === "functions") {
    SECTIONJQUERY[0].innerHTML = functionsHTML // ! ARRAY?
  }
}