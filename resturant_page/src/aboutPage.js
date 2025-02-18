const container = document.querySelector('#content')

export function createAboutPage() {
    const section = document.createElement('section')
    section.classList.add('about-page')
    const intro = createIntro()
    const about = createAbout()
    section.appendChild(intro)
    section.appendChild(about)
    container.appendChild(section)

    return section
}

const introText = 'Welcome to Mt. Everest Restaurant, where culinary tradition meets modern charm. Situated in the heart of Bāgmatī, Nepal, we take immense pride in bringing the rich and diverse flavors of Nepali cuisine to our valued guests. Our story is one of passion, heritage, and a commitment to excellence.'
function createIntro(){
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = introText
    div.appendChild(p)
    
    return div
}

const aboutText = 'Nestled in the heart of Bāgmatī, Nepal, Mt. Everest Restaurant offers a culinary journey that transcends borders and brings the rich flavors of the Himalayas to your table. Named after the majestic peak that symbolizes strength and grandeur, Mt. Everest Restaurant is a haven for food enthusiasts seeking an authentic taste of Nepali cuisine.'
function createAbout(){
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.textContent = aboutText;
    div.appendChild(p)

    return div
}

