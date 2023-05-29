import React from 'react'

const ErrorForm = ({setData, setId, message}) => {

    const resetMenu = () => {
        setData()
        setId()
    }
  return (
    <div className='error__form'>
        <div>
            {message}
        </div>
        <button className='button' onClick={resetMenu}>
            Volver
        </button>
    </div>
  )
}

export default ErrorForm