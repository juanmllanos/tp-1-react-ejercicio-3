import React, { useState } from 'react'

const HolaMundo = (props) => {
  const [mensaje, setMensaje] = useState('')

  return (
    <div>
      <h1 className='text-center display-1 my-5'>Hola {props.saludo}! <span className='display-4'>{mensaje}</span></h1>;
      <button className="d-flex mx-auto btn btn-secondary" onClick={() => setMensaje('(Cambiado desde el state)')}>Haceme Clik</button>
    </div>
  )
};

export default HolaMundo;