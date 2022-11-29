const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {

        num.classList.value = ''

    })
    nums[0].classList.add('in')
}


function runAnimation() {
    console.log(2);
    nums.forEach((num, idx) => {
        console.log(2);
        const nextTolast = nums.length - 1
        num.addEventListener('animationend', (e) => {

            if (e.animationName === 'goIn' && idx !== nextTolast) {
                num.classList.remove('in')
                num.classList.add('out')

            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                console.log(num.nextElementSibling);
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })

}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})