const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = '今天我吃了很多素菜，明天我要吃肉'

let idx = 1
let speed = 300 / speedEl.value
writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    console.log('textEl.innerText: ', textEl.innerText);
    idx++

    if (idx > text.length) {
        idx = 1

    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)