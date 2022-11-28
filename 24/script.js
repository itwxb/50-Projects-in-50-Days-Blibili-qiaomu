const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
getData()

function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" />'
    title.innerHTML = '乔木的自传'
    excerpt.innerHTML =
        '乔木是一个喜欢吃饭的普通人，他没女朋友'
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" />'
    name.innerHTML = '乔木'
    date.innerHTML = '2022, 07 16'
    animated_bgs.forEach(bg => {
        bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}