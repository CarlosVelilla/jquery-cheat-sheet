/* IMPORT */

import { homeJsHtml, eventsJsHtml, functionsJsHtml } from "./JavaScript/JavaScript-content.js"
import { homeJqueryHtml, eventsJqueryHtml, functionsJqueryHtml } from "./jQuery/jQuery-content.js"
import { getEventsSection } from "./JavaScript/main-functionalities-JS.js"

/* LOCATING ELEMENTS IN THE DOM */

const LOGOBTN = document.getElementById("header-logo")
const HOMEBTN = document.getElementById("home-btn")
const EVENTSBTN = document.getElementById("events-btn")
const FUNCTIONSBTN = document.getElementById("functions-btn")

const SECTIONJS = document.getElementById("javascript-section")
const SECTIONJQUERY = document.getElementById("jquery-section")

const NEXTBTN = document.getElementById("next-btn")
const PREVIOUSBTN = document.getElementById("previous-btn")

/* FUNCTIONALITIES */

window.addEventListener("load", () => {
  hideMovementButtons()
  changeJsHtml("home")
  changeJqueryHtml("home")
})

LOGOBTN.addEventListener("click", () => {
  hideMovementButtons()
  changeJsHtml("home")
  changeJqueryHtml("home")
})

HOMEBTN.addEventListener("click", () => {
  hideMovementButtons()
  changeJsHtml("home")
  changeJqueryHtml("home")
})

EVENTSBTN.addEventListener("click", () => {
  showMovementButtons()
  changeJsHtml("events")
  changeJqueryHtml("events")
  showExercises(0)
  getEventsSection()
})

FUNCTIONSBTN.addEventListener("click", () => {
  showMovementButtons()
  changeJsHtml("functions")
  changeJqueryHtml("functions")
})

NEXTBTN.addEventListener("click", () => {
  showExercises(1)
})

PREVIOUSBTN.addEventListener("click", () => {
  showExercises(-1)
})

function changeJsHtml(page) {
  if (page === "home") {
    SECTIONJS.innerHTML = homeJsHtml
  } else if (page === "events") {
    SECTIONJS.innerHTML = eventsJsHtml
  } else if (page === "functions") {
    SECTIONJS.innerHTML = functionsJsHtml
  }
}

function changeJqueryHtml(page) {
  if (page === "home") {
    SECTIONJQUERY.innerHTML = homeJqueryHtml
  } else if (page === "events") {
    SECTIONJQUERY.innerHTML = eventsJqueryHtml
  } else if (page === "functions") {
    SECTIONJQUERY.innerHTML = functionsJqueryHtml
  }
}

function showMovementButtons() {
  NEXTBTN.style.display = "flex"
  PREVIOUSBTN.style.display = "flex"
}

function hideMovementButtons() {
  NEXTBTN.style.display = "none"
  PREVIOUSBTN.style.display = "none"
}

let currentExercise = 0

function showExercises(number) {
  if (currentExercise < SECTIONJS.querySelectorAll("[data-exercise]").length -1 || number < 0) {
    currentExercise += number

    if (currentExercise == 0) {
      PREVIOUSBTN.style.visibility = "hidden"
    } else if (currentExercise > 0) {
      PREVIOUSBTN.style.visibility = "visible"
    }

    if (currentExercise == SECTIONJS.querySelectorAll("[data-exercise]").length -1) {
      NEXTBTN.style.visibility = "hidden"
    } else {
      NEXTBTN.style.visibility = "visible"
    }

    let exercisesJs = SECTIONJS.querySelectorAll("[data-exercise]")
    exercisesJs.forEach(exercise => {
      exercise.classList.add("display-none")
    })
    exercisesJs[currentExercise].classList.remove("display-none")

    let exercisesJquery = SECTIONJQUERY.querySelectorAll("[data-exercise]")
    exercisesJquery.forEach(exercise => {
      exercise.classList.add("display-none")
    })
    exercisesJquery[currentExercise].classList.remove("display-none")
  }
}