const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dargStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// empties.forEach((empty) => {
//     empty.addEventListener('dragover', dragOver)
//     empty.addEventListener('dragenter', dragEnter)
//     empty.addEventListener('dragleave', dragLeave)
//     empty.addEventListener('drop', dragDrop)
// })


function dargStart() {
    this.className += ' hold'

}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()

}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('enter');
}


function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}
