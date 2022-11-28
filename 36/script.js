const container = document.getElementById('container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {

    const color = getRandomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`


}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {

    return colors[Math.floor(Math.random() * colors.length)]
    // 0-1 不包括1 0.1 0.2 0.9999999
    //0 1 2 3 4
    // 长度5  




}