const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', getjoke)

getjoke()

async function getjoke() {

    const config={
        headers:{
            Accept:'application/json',
        }
    }





    const res = await fetch('https://icanhazdadjoke.com', config)
    console.log('res: ', res);

    const data =await res.json()
    console.log('data: ', data);
 

    jokeEl.innerHTML=data.joke
}