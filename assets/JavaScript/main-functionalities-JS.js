import { homeHTML } from "./JavaScript-content.js"

const SECTIONJS = document.getElementById("javascript-section")

window.addEventListener("load", () => {
  changeHTML("home")
})

function changeHTML(page) {
  if (page === "home") {
    SECTIONJS.innerHTML = homeHTML
  }
}