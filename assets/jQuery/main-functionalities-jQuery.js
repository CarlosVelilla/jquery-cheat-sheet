/* IMPORTS */

import { LOGOBTN, HOMEBTN, EVENTSBTN, FUNCTIONSBTN} from "../main.js"
import { homeHTML, eventsHTML, functionsHTML } from "./jQuery-content.js"

/* LOCATING ELEMENTS IN THE DOM */

const SECTIONJQUERY = $("#jquery-section")

/* EVENT LISTENERS */
// ? REFACTOR (IN FUNCTION) PENDING

$(window).on("load", () => {
  changeJqueryHtml("home")
})

LOGOBTN.on("click", () => {
  changeJqueryHtml("home")
})

HOMEBTN.on("click", () => {
  changeJqueryHtml("home")
})

EVENTSBTN.on("click", () => {
  changeJqueryHtml("events")
})

FUNCTIONSBTN.on("click", () => {
  changeJqueryHtml("functions")
})

/* FUNCTIONALITIES */

function changeJqueryHtml(page) {
  if (page === "home") {
    SECTIONJQUERY[0].innerHTML = homeHTML // ! ARRAY?
  } else if (page === "events") {
    SECTIONJQUERY[0].innerHTML = eventsHTML // ! ARRAY?
  } else if (page === "functions") {
    SECTIONJQUERY[0].innerHTML = functionsHTML // ! ARRAY?
  }
}