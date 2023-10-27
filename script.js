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
button.addEventListener('click', function () {
    // Toggle the .hidden class on the paragraph (see CSS)
    img.classList.toggle('hidden');
});
console.log(img.textContent);