import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';


function New ({ setRefresh }) {
  const [name, setName] = useState('')
  const [fact, setFact] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async (event)=>{
    event.preventDefault()
    try {
      postFetch('countries',{name: name, fact: fact})
        .then((response) => {
          setName('')
          setFact('')
          setMessage('Creado correctamente!!!')
          setRefresh(true)
        } )
    } catch(error) {
      console.log(error)
    } 
    

  }

  return(
    <div>
      <h3>Crear nuevo país</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type = "text"
            value = {name}
            placeholder="Nombre del país:"
            onChange = {(e)=>{ setName(e.target.value) }} />
        </div>
        <div>
          <input
            type = "text"
            value = {fact}
            placeholder="Dato curioso:"
            onChange = {(e)=>{ setFact(e.target.value) }} />
        </div>

        <div> {message ? <p>{message}</p> : <br />} </div>
        <button className = "btn" type = "submit"> Crear </button>
      </form>
    </div>
  )


}



export default New;