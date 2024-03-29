import React from 'react'

const ShownPhrase = ({frase}) => {
  return (
    <div className='text'>
        <span className='frase'>
        {frase.phrase}
        </span>
    </div>
  )
}

export default ShownPhrase