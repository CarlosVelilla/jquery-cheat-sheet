import { homeHTML } from "./jQuery-content.js"

const SECTIONJQUERY = $("#jQuery-section")
console.log(SECTIONJQUERY)

$(window).on("load", () => {
  changeHTML("home")
})

function changeHTML(page) {
  if (page === "home") {
    SECTIONJQUERY[0].innerHTML = homeHTML
  }
}