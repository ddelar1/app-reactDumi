import React , {useState} from 'react'

export default function Component() {

    const[text, setText] = useState()
    const[update, setUpdated] = useState()

    const textOnchange = (event) => {
      setText(event.target.value)
    }
    const buttonOnClick = () => {
       setUpdated(text)
    }
     

  return (
    <div>
      <p>
      Una pequeña demostración de estados en React.
      </p>
      <p>
      Ingresa algo en el campo de texto y se actualizara automaticamene en la pag...!!!
      </p>
      <input type='text' value={text} onChange={textOnchange}/>
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto input : {text}</p>
      <p>Texto actualizado : {update}</p>
    </div>
  )
}
