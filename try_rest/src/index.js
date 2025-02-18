import './style.css'
import './homePage.js'
// import { createHomePage } from './homePage.js'
import { createMenuPage } from './menuPage.js'
import { createHomePage } from './homePage.js'
import { createAboutPage } from './aboutPage.js'

const Buttons = document.querySelector('nav')
const container = document.querySelector('#content')

createHomePage()

Buttons.addEventListener('click', (button) => {
    // console.log(button.target.textContent);
    const btn = button.target.textContent;
    
    if (btn == 'Home') {
        container.textContent = '';
        createHomePage();
    }
    else if (btn == 'Menu') {
        container.textContent = '';
        createMenuPage()
    }
    else {
        container.textContent = '';
        createAboutPage()
    }
})


// Buttons.addEventListener('click', (button) => {
//     const target = button.target;
//     console.log(target.textContent);

//     if (target.textContent == 'Home') {
//         container.textContent = '';
//         createHomePage();
//     } else if (target.textContent == 'Menu') {
//         createMenuPage()
//         console.log('Menu is pressed');
//     } else {
//         console.log('About is pressed');
//     }
// });
