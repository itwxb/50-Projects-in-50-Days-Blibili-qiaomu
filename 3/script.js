const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show_nav'))
close.addEventListener('click', () => container.classList.remove('show_nav'))