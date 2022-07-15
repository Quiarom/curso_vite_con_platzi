import './style.css'
import './variables.scss'
import meme from './FU8I1OHXoAIa3FC.jpg'
import  newColorBtn  from './btn.module.css'
import memeStyle from './meme.module.css'
import javascriptLogo from './javascript.svg'

import { setupCounter } from './counter.js'
import dataInJson from './data.json'
import suma from './love.ts'

// const modules = import.meta.glob('./modules/*.js');

// for(const path in modules){
//   async function fetchModule(){
//     const module = await modules[path]();
//     module.load();
//   }
//   fetchModule();
//   // modules[path]().then((module)=>{
//   //   module.load();
//   // })
// }

// console.info(modules);

console.log(suma(2,3))


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hola Mundo con Vite</h1>
    <pre style="color: black;">${JSON.stringify(dataInJson)}</pre>
    <div class="card">
      <button id="btn" type="button">Click me!</button>
      <button id="counter" type="button"></button>
    </div>
    <img id="meme" width=200px height=200px>
  </div>
`

const momazo = document.getElementById('meme')
momazo.className = memeStyle.meme
momazo.src = meme

document.getElementById('btn').className = newColorBtn.btn 

setupCounter(document.querySelector('#counter'))

