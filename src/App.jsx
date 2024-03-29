import './App.css'
import ShownPhrase from './components/ShownPhrase.jsx'
import Boton from './components/Boton.jsx'
import { useState } from 'react'
import arrayPhrase from './utlis/phares.json'
import random from './utlis/random.js'
import arrayImg from './utlis/arrayImg.json'

function App() {

  const [content, setContet] = useState(random(arrayPhrase))
  const [fondo, setfondo] = useState(random(arrayImg))
  
  const styleChange = {backgroundImage: `url(../img/fondo${fondo}.jpg)`}
  
  return (
    <>
      <div className='conteiner' style={styleChange}>
      <h1>Galleta de la fortuna</h1>
      <ShownPhrase 
      frase={content}
      />
      <Boton
      setContet={setContet}
      setfondo={setfondo}
      />

      <div className='rectangulo'>
      <img src='../img/rectangle1.svg' className='hojita'></img>
      </div>

      </div>

    </>
  )
}

export default App
