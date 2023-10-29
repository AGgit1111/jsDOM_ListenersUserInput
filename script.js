// EVENT LISTENERS
// Types of events: click, mouseover, mouseout, keydown, keyup, submit, etc.
//Basic template of a click event:
/* element.addEventListener('click', function() {
    // code to run when the element is clicked
});
*/
// Select the button and paragraph:
const button = document.getElementById('toggleButton');
const img = document.getElementById('pToggle');
// Add a click event listener to the button:
button.addEventListener('click', function (event) {
    // Toggle the .hidden class on the paragraph (see CSS)
    img.classList.toggle('hidden');
});
console.log(img.textContent);

// Here are some Event Object Properties. Open Console and click the button to see what it prints.
// There are many more, but this is a good start to understanding them.
button.addEventListener('click', function (event) {
    console.log(event.type);
});

document.body.addEventListener('click', function (event) {
    console.log(event.target.tagName);  // Outputs the name of the clicked element, e.g., "BUTTON"
});

document.body.addEventListener('click', function (event) {
    console.log(event.currentTarget === document.body);  // Outputs: true
});
