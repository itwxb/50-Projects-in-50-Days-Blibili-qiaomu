const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


const messages = [
    '信息1',
    '信息2',
    '信息3',
    '信息4'
]
const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {

    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()


    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function getRandomType() {

    return types[Math.floor(Math.random() * types.length)]


}

function getRandomMessage() {

    return messages[Math.floor(Math.random() * messages.length)]

}
12345678900987654321