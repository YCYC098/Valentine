const messages = [
    "Are you sure?", 
    "Are you really sure?", 
    "Change your mind.", 
    "Say Yes.", 
    "Okay I'll go kill myself.", 
    "You're a monster.", 
    "Ofc I wasted my damn time with this website.", 
    "Ungratefull ahh mf.", 
    "Gay bastard.",
    "Big forehead ahh mf.",
    "Only wants me for Jelly Cats ahh mf.", 
    "Face been breaking out ahh mf.", 
    "Needs a cheatsheet and desmos to survive in highschool level math ahh mf.", 
    "Looking at your face makes me gay ahh mf.", 
    "Your presence might make me agnostic ahh mf.", 
    "Your self-esteem more brittle than your macaron shells ahh mf.", 
    "Fuckahh bitch say yes goddamit."

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