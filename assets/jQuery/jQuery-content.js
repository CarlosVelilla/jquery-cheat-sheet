let homeJqueryHtml = `
  <header class="section__header">
    <img src="./assets/img/jquery-logo.svg" alt="jQuery logo" class="company-logo">
  </header>
  <div id="right-section__container" class="section__container">
    <h2 class="subtitle" id="element">But first... what is jQuery?</h2>
    <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
    With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>
    <h2 class="subtitle">That's cool, but... what's a library?</h2>
    <p>In computer science, a library is a collection of non-volatile resources used by computer programs, often for software development. These may include configuration data, documentation, help data, message templates, pre-written code and subroutines, classes, values or type specifications. In IBM's OS/360 and its successors they are referred to as partitioned data sets.</p>

    <p>A library is also a collection of implementations of behavior, written in terms of a language, that has a well-defined interface by which the behavior is invoked. For instance, people who want to write a higher-level program can use a library to make system calls instead of implementing those system calls over and over again. In addition, the behavior is provided for reuse by multiple independent programs. A program invokes the library-provided behavior via a mechanism of the language. For example, in a simple imperative language such as C, the behavior in a library is invoked by using C's normal function-call. What distinguishes the call as being to a library function, versus being to another function in the same program, is the way that the code is organized in the system.</p>
    <h2 class="subtitle">Some reasons to use of jQuery</h2>
    <ol>
      <li>jQuery promotes simplicity</li>
      <li>jQuery elements display even when JavaScript is disabled</li>
      <li>jQuery easily integrates with the Visual Studio IDE</li>
      <li>jQuery makes animated applications just like Flash</li>
      <li>jQuery pages load faster</li>
      <li>jQuery can be SEO friendly</li>
    </ol>
    <p class="paragraph-note">Fonts: <a href="https://en.wikipedia.org/wiki/Library_(computing)">Wikipedia</a>, <a href="https://www.infoworld.com/article/2078613/6-reasons-you-should-be-using-jquery.html">Infoworld.com</a>, and the official web of <a href="https://jquery.com/">jQuery.</p>
  </div>
`

let eventsJqueryHtml = `
  <header class="section__header">
    <img src="./assets/img/jquery-logo.svg" alt="jQuery logo" class="company-logo">
  </header>
  <div id="right-section__container" class="section__container">
    <div data-exercise class="display-none">
      <h2 class="subtitle">1.- When the HTML document has been loaded and you can manipulate it with JavaScript</h2>
      <p>
        In jQuery we can use something like this:<code>
        $(window).on("load", () => {
          alert("Hello! You just loaded this page")
        })
        </code> Do you want to try?
      </p>
      <a id="exercise01Btn" href="./exercise01.html" target="_blank">Try me!</a>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">2.- When an HTML item has been clicked</h2>
      <p>Instead, in jQuery we could use something like: <code>$("#ex-02-jquery-btn").on("click", () => {alert("You just clicked me!")})</code></p>
      <button id="ex-02-jquery-btn">Just click me already!</button>
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

let functionsJqueryHtml = `
  <header class="section__header">
    <img src="./assets/img/jquery-logo.svg" alt="jQuery logo" class="company-logo">
  </header>
  <div id="right-section__container" class="section__container">
    <div data-exercise class="display-none">
      <h2 class="subtitle">1.- Create an HTML element with any text value</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">2.- Remove an HTML element with any text value</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">3.- Append an HTML element with any text value to a parent element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">4.- Prepend an HTML element with any text value to a parent element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">5.- Create and add an HTML element with any text value after another element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">6.- Create and add an HTML element with any text value before another element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">7.- Clone an HTML element within other element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">8.- Add a class to an HTML item</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">9.- Remove a class to an HTML item</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">10.- Toggle a class of an HTML item</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">11.- Add a disabled attribute to an HTML button</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">12.- Remove the disabled attribute of an HTML button</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">13.- Set a data-src attribute to a img element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">14.- Remove the data-src attribute of the img element</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">15.- Hide an HTML element on click (display: none)</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">16.- Show an HTML element on click (display: block)</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">17.- Fade in an HTML element using jQuery</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">18.- Fade out an HTML element using jQuery</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">19.- Iterate a collection of elements and apply a change of style on them</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">20.- Get the parent element of a certain element and change its font weight</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">21.- Get the collection of children of a certain element and change its font weight</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">22.- Get all the elements that have a certain class and change their font weight</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">23.- Get an item by id and change its font weight</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">24.- Get all the elements that have a certain class and the display property of none and change their font color</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">25.- Get the options of a select element that are selected (attribute selected)</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">26.- Change the href attribute of the first &lt;a&gt; element (You have to create several &lt;a&gt; elements)</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">27.- Show an alert with the value of the first &lt;input&gt; of the page (Create an &lt;input&gt; element to test this case)</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">28.- Remove all items from a specific selector</h2>
    </div>
    <div data-exercise class="display-none">
      <h2 class="subtitle">29.- Animate an item after 2 seconds from the initial page load</h2>
    </div>
  </div>
`

export {
  homeJqueryHtml, eventsJqueryHtml, functionsJqueryHtml
}