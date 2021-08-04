let homeJsHtml = `
  <div id="left-section__container" class="section__container left-section__home">
    <h1 class="title">Welcome!</h1>
    <p>This is a jQuery CheatSheet that will help you understand and translate your Vanilla JavaScript code to a jQuery version</p>
    <h2>Let's dive in!</h2>
    <p>Select a section and move through with the arrows below</p>
    <h1 class="title">&#10553;</h1>
  </div>
`

let eventsJsHtml = `
  <header class="section__header">
    <img src="./assets/img/javascript-logo.svg" alt="JavaScript logo" class="company-logo">
  </header>
  <div id="left-section__container" class="section__container">
    <div data-exercise class="display-none">
      <h2 class="subtitle">1.- When the HTML document has been loaded and you can manipulate it with JavaScript</h2>
      <p>In Javascript Vanilla we could use: <code>document.addEventListener("load", function() {alert("Hello! You just loaded this page")})</code>.</p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">2.- When an HTML item has been clicked</h2>
      <p>In Javascript Vanilla we could use: <code>document.getElementById("ex-02-js-btn").addEventListener("click", function() {alert("You just clicked me!")})</code></p>
      <button id="ex-02-js-btn">Click me if you dare!</button>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">3.- When an HTML item has been double clicked</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">4.- When the user presses a key on the keyboard</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">5.- When the user moves the mouse cursor</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">6.- When the user changes a value of an text input</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">7.- When an image is loaded</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">8.- When an image fails to load (if you write an incorrect image url the loading of the image will fail)</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">9.- When a form is submitted</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">10.- When the user changes the option of a select element</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">11.- When you position the mouse over an element</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">12.- When a checkbox is checked or unchecked</h2>
      <p></p>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">13.- When a ul list item is clicked, show the item that was clicked</h2>
      <p></p>
    </div>
  </div>
`

let functionsJsHtml = `
  <header class="section__header">
    <img src="./assets/img/javascript-logo.svg" alt="JavaScript logo" class="company-logo">
  </header>
  <div id="left-section__container" class="section__container">
    <h1 id="element">FUNCTIONS WIP</h1>
    <h2 class="subtitle">Create an HTML element with any text value</h2>
    <h2 class="subtitle">Remove an HTML element with any text value</h2>
    <h2 class="subtitle">Append an HTML element with any text value to a parent element</h2>
    <h2 class="subtitle">Prepend an HTML element with any text value to a parent element</h2>
    <h2 class="subtitle">Create and add an HTML element with any text value after another element</h2>
    <h2 class="subtitle">Create and add an HTML element with any text value before another element</h2>
    <h2 class="subtitle">Clone an HTML element within other element</h2>
    <h2 class="subtitle">Add a class to an HTML item</h2>
    <h2 class="subtitle">Remove a class to an HTML item</h2>
    <h2 class="subtitle">Toggle a class of an HTML item</h2>
    <h2 class="subtitle">Add a disabled attribute to an HTML button</h2>
    <h2 class="subtitle">Remove the disabled attribute of an HTML button</h2>
    <h2 class="subtitle">Set a data-src attribute to a img element</h2>
    <h2 class="subtitle">Remove the data-src attribute of the img element</h2>
    <h2 class="subtitle">Hide an HTML element on click (display: none)</h2>
    <h2 class="subtitle">Show an HTML element on click (display: block)</h2>
    <h2 class="subtitle">Fade in an HTML element using jQuery</h2>
    <h2 class="subtitle">Fade out an HTML element using jQuery</h2>
    <h2 class="subtitle">Iterate a collection of elements and apply a change of style on them</h2>
    <h2 class="subtitle">Get the parent element of a certain element and change its font weight</h2>
    <h2 class="subtitle">Get the collection of children of a certain element and change its font weight</h2>
    <h2 class="subtitle">Get all the elements that have a certain class and change their font weight</h2>
    <h2 class="subtitle">Get an item by id and change its font weight</h2>
    <h2 class="subtitle">Get all the elements that have a certain class and the display property of none and change their font color</h2>
    <h2 class="subtitle">Get the options of a select element that are selected (attribute selected)</h2>
    <h2 class="subtitle">Change the href attribute of the first &lt;a&gt; element (You have to create several &lt;a&gt; elements)</h2>
    <h2 class="subtitle">Show an alert with the value of the first &lt;input&gt; of the page (Create an &lt;input&gt; element to test this case)</h2>
    <h2 class="subtitle">Remove all items from a specific selector</h2>
    <h2 class="subtitle">Animate an item after 2 seconds from the initial page load</h2>
  </div>
`

export {
  homeJsHtml, eventsJsHtml, functionsJsHtml
}