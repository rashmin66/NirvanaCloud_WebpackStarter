import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'
import getData from './generateJoke'

const laughImg = document.getElementById('laughImg')
//laughImg.src = laughing

//const jokeBtn = document.getElementById('jokeBtn')
// jokeBtn.addEventListener('click', generateJoke)


const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{getData('Rashmi','Kurunegala')});
// generateJoke()