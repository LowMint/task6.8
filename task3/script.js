const trafficLightEl = document.querySelector('#trafficLight')
const trafficLightEl2 = document.querySelector('#trafficLight2')
const trafficLightEl3 = document.querySelector('#trafficLight3')
const allCurcles = document.querySelector('#all')

function makeGreen() {
    trafficLightEl.style.background = ('green')
    trafficLightEl2.style.background = ('black')
    trafficLightEl3.style.background = ('black')
    allCurcles.removeEventListener('click', makeGreen)
    allCurcles.addEventListener('click',makeYellow)
}

// trafficLightEl.addEventListener('click', makeGreen)
allCurcles.addEventListener('click', makeGreen)


function makeYellow() {
    trafficLightEl2.style.background = ('yellow')
    trafficLightEl.style.background = ('black')
    trafficLightEl3.style.background = ('black')
    allCurcles.removeEventListener('click', makeYellow)
    allCurcles.addEventListener('click', makeRed)
}

function makeRed() {
    trafficLightEl3.style.background = ('red')
    trafficLightEl2.style.background = ('black')
    trafficLightEl.style.background = ('black')
    allCurcles.removeEventListener('click', makeRed)
    allCurcles.addEventListener('click', makeGreen)
}