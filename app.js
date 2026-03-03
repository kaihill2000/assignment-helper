// app.js

// Function to generate responses based on user input
function generateResponse(input) {
    // Example response generation logic
    if (input.trim() === "") {
        return "Please provide input.";
    }
    return `You said: ${input}`;
}

// Function to handle user submit action
function handleSubmit() {
    const inputField = document.getElementById('userInput');
    const responseField = document.getElementById('responseOutput');
    
    const userInput = inputField.value;
    const response = generateResponse(userInput);

    responseField.textContent = response;

    // Save to local storage
    localStorage.setItem('lastInput', userInput);
}

// Event listener for form submission
document.getElementById('submitButton').addEventListener('click', handleSubmit);

// Load last input from local storage
document.addEventListener('DOMContentLoaded', () => {
    const lastInput = localStorage.getItem('lastInput');
    if (lastInput) {
        document.getElementById('userInput').value = lastInput;
    }
});
