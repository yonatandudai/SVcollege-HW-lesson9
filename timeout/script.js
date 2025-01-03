// Create a container for all elements
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'flex-start';
container.style.height = '100vh';
container.style.margin = '0';
container.style.paddingTop = '20px'; // Add some padding to the top
document.body.appendChild(container);

// Create the timer div element and style it
const timer = document.createElement('div');
timer.style.fontSize = '2em'; // Set the font size of the timer
timer.style.marginBottom = '20px'; // Add margin below the timer
container.appendChild(timer); // Append the timer to the container

// Create the input field for the user to set the time
const timeInput = document.createElement('input');
timeInput.type = 'number';
timeInput.value = '10'; // Set the initial value of the input field
timeInput.min = '1'; // Set the minimum value for the input field
timeInput.style.marginBottom = '20px'; // Add margin below the input field
container.appendChild(timeInput); // Append the input field to the container

// Create a button container
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '10px'; // Add space between buttons
container.appendChild(buttonContainer);

// Create the "Start" button
const startBtn = document.createElement('button');
startBtn.innerHTML = 'Start'; // Set the button's text
buttonContainer.appendChild(startBtn); // Append the button to the button container

// Create the "Stop" button
const stopBtn = document.createElement('button');
stopBtn.innerHTML = 'Stop'; // Set the button's text
buttonContainer.appendChild(stopBtn); // Append the button to the button container

// Create the "Reset" button
const resetBtn = document.createElement('button');
resetBtn.innerHTML = 'Reset'; // Set the button's text
buttonContainer.appendChild(resetBtn); // Append the button to the button container

let timerTimeout; // Variable to store the timeout ID
let timeLeft = parseInt(timeInput.value, 10); // Initialize timeLeft with the input value

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--; // Decrease the time left by 1 second
        timer.innerHTML = `Timer: ${timeLeft}`; // Update the timer text
        timerTimeout = setTimeout(updateTimer, 1000); // Call updateTimer again after 1 second
    } else {
        timer.innerHTML = 'Time\'s up'; // Display "Time's up" when the countdown reaches 0
    }
}

// Event listener for the input field to update the initial value of the timer
timeInput.addEventListener('input', () => {
    timeLeft = parseInt(timeInput.value, 10) || 1; // Update timeLeft, default to 1 if invalid
    timer.innerHTML = `Timer: ${timeLeft}`; // Update the timer text
});

// Event listener for the "Start" button
startBtn.addEventListener('click', () => {
    clearTimeout(timerTimeout); // Clear any existing timeout
    if (timeLeft === 0) { // If the timer has finished, reset it
        timeLeft = parseInt(timeInput.value, 10); // Set the countdown time from the input field
    }
    timer.innerHTML = `Timer: ${timeLeft}`; // Update the timer text
    timerTimeout = setTimeout(updateTimer, 1000); // Start the countdown
});

// Event listener for the "Stop" button
stopBtn.addEventListener('click', () => {
    clearTimeout(timerTimeout); // Stop the countdown
});

// Event listener for the "Reset" button
resetBtn.addEventListener('click', () => {
    clearTimeout(timerTimeout); // Clear any existing timeout
    timeLeft = parseInt(timeInput.value, 10); // Reset the countdown time from the input field
    timer.innerHTML = `Timer: ${timeLeft}`; // Reset the timer text
});
