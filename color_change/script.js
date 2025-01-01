//Q1.Color change
// Create the "Change Color" button
const colorBtn = document.createElement('button');
colorBtn.id = 'colorBtn';
colorBtn.innerHTML = 'Change Color';

// Create the "Cancel" button
const cancelBtn = document.createElement('button');
cancelBtn.innerHTML = 'Cancel';

// Create the div element
const myDiv = document.createElement('div');
myDiv.id = 'myDiv';

// Create a container for the buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'row';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.marginBottom = '20px';

// Append buttons to the container
buttonContainer.appendChild(colorBtn);
buttonContainer.appendChild(cancelBtn);

// Append the container and the div to the body
document.body.appendChild(buttonContainer);
document.body.appendChild(myDiv);

// Add styles to center elements and make the div bigger
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

myDiv.style.width = '400px';
myDiv.style.height = '400px';
myDiv.style.backgroundColor = 'white';
myDiv.style.border = '1px solid black';
myDiv.style.margin = '10px';

let myTimeout; // Variable to store the timeout ID
let isBlue = false; // Variable to track the current color state of the div

// Event listener for the "Change Color" button
colorBtn.addEventListener('click', () => {
    colorBtn.disabled = true; // Disable the button to prevent multiple clicks
    myTimeout = setTimeout(() => {
        if (isBlue) {// Toggle the background color,
        //equivalent to: myDiv.style.backgroundColor = isBlue ? 'white' : 'blue';
            myDiv.style.backgroundColor = 'white';
        } else {
            myDiv.style.backgroundColor = 'blue';
        }
        isBlue = !isBlue; // Update the color state
        colorBtn.disabled = false; // Re-enable the button
    }, 2000); // Set a timeout of 2 seconds
});

// Event listener for the "Cancel" button
cancelBtn.addEventListener('click', () => {
    clearTimeout(myTimeout); // Clear the timeout if it exists
    colorBtn.disabled = false; // Re-enable the "Change Color" button
});

