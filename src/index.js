import './index.css';
import { homepage } from './homepage.js'

//implement switching button switching logic
const navBar = document.getElementsByTagName('nav');
const allButtons = navBar.querySelectorAll('button');

//add event listeners

allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        handleButton();
    } );        
});

function handleButton() {
    allButtons.forEach((button) => {

    });
}

homepage();