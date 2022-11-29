const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cricles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > cricles.length) {
        currentActive = cricles.length

    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    cricles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }


    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (cricles.length - 1) * 100 + '%'
    if (currentActive === 1) {
        prev.disabled = true

    } else if (currentActive === cricles.length) {
        next.disabled = true


    } else {
        prev.disabled = false
        next.disabled = false
    }
}