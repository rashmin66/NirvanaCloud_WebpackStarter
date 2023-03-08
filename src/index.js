//import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'
import getHelloWorld from './generateJoke'

const laughImg = document.getElementById('laughImg')


const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{

  const name_R =  document.getElementById('name').value;
  const city_R =  document.getElementById('city').value;
    getHelloWorld(name_R,city_R)
});
