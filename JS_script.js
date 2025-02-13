const messages = [
    "Are you sure?", 
    "Are you really sure?", 
    "Change your mind.",
    // ...additional messages...
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`; // Change the factor to 1.1 for smaller increments
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.yes-button').addEventListener('click', handleYesClick);
    document.querySelector('.no-button').addEventListener('click', handleNoClick);
});
