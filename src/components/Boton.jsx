import React from 'react'
import arrayPhrase from '../utlis/phares.json'
import random from '../utlis/random'
import arrayImg from '../utlis/arrayImg.json'


const Boton = ({setContet,setfondo}) => {
    const handlePhrase = () => {
        setContet(random(arrayPhrase))
        setfondo(random(arrayImg))
    }
    
  return (

    
    <button onClick={handlePhrase}className='boton'>
    prueba tu suerte
    </button>    

  )
}

export default Boton