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
//Click any element on the screen and see it logged to the console.
document.body.addEventListener('click', function (event) {
    console.log(event.target.tagName);  // Outputs the name of the clicked element, e.g., "BUTTON"
});

document.body.addEventListener('click', function (event) {
    console.log(event.currentTarget === document.body);  // Outputs: true
});

// Handling User Input (there are many more than demonstrated here)
// Log text that user typed into the input field when submit button is clicked.
submitForm.addEventListener('submit', function (event) {
    const submitForm = document.getElementById('submitForm');
    const inputText = document.getElementById('inputText').value; // Notice we're collecting the value
    // Prevent the form from submitting and reloading the page:
    event.preventDefault();
    // Get the value of the text input:
    logText = document.getElementById('output').textContent;
    logText = inputText;

    console.log(logText);
});

// A less verbose way to write it. This time, printing the input text below the form on the website:
document.getElementById('submitForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();
    // Get the value of the text input
    const inputText = document.getElementById('inputText').value;
    // Display the input value in the output element
    document.getElementById('output').textContent = inputText;
});