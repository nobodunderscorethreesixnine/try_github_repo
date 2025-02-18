import logoImage from '../images/logo.png'

const container = document.querySelector('#content')

export function createHomePage() {
    let section = document.createElement('section')
    section.classList.add('home-page')
    let leftSide = createLeftSide()
    let rightSide = createRightSide()
    section.appendChild(leftSide)
    section.appendChild(rightSide)
    container.appendChild(section)

}

function createLeftSide() {
    let div = document.createElement('div')
    div.classList.add('left-side')
    return div
}

function createRightSide() {
    let div = document.createElement('div')
    div.classList.add('right-side')
    let img = document.createElement('img')
    // img.src = '../images/logo.png'
    img.src = logoImage;

    let strong = document.createElement('strong')
    strong.textContent = 'Food'

    let secondDiv = document.createElement('div')
    let em = document.createElement('em')
    em.textContent = '“Eat Good, feel Good.”'
    secondDiv.appendChild(em);

    div.appendChild(img)
    div.appendChild(strong)
    div.appendChild(secondDiv)

    return div

}

