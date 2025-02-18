import foodImage from '../images/food.png'
const container = document.querySelector('#content')

export function createMenuPage() {
    const section = document.createElement('section')
    section.classList.add('menu-page')
    const h1 = document.createElement('h1')
    h1.textContent = 'Everest Menu';

    section.appendChild(h1)
    const menu = createMenu()
    section.appendChild(menu)
    container.appendChild(section)
}

let boxes = []
function createMenu() {
    const main = document.createElement('main')


    boxes.forEach((box) => {
        main.appendChild(box)
    })
    return main
}


function createCardLayout() {
    for (let index = 6; index > 0;) {
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.textContent = 'Banana'
        const img = document.createElement('img')
        img.src = foodImage;
        const em = document.createElement('em')
        em.textContent = 'Price 200Rs'
        div.appendChild(h2)
        div.appendChild(img)
        div.appendChild(em)
        boxes.push(div)
        index--;
    }
}

createCardLayout()
