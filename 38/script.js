const contents = document.querySelectorAll('.content')
console.log('contents: ', contents);
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(contents => contents.classList.remove('show'))

}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))

}