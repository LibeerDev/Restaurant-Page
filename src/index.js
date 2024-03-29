import './output.css';
import { homepage } from './homepage.js'
import { menu } from './menu.js'
import { about } from './about.js'

const content = document.getElementById('content');

//implement switching button switching logic
const navBar = document.getElementById('navbar')
const allButtons = navBar.querySelectorAll('button');

//add event listeners

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        handleButton(button.id);
    } );            
});

function resetContent() {
    const allTagsInContent = content.querySelectorAll('*');
    allTagsInContent.forEach(node => node.remove());
}

function handleButton(buttonId) {
    resetContent();
    if (buttonId === 'homeBtn') {
        homepage();
    }

    else if (buttonId === 'menuBtn') {
        menu();
    }
    
    else if (buttonId === 'aboutBtn') {
        about();
    }
}

homepage();