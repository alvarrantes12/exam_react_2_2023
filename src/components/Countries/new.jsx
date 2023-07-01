import React, { useState } from "react";
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('')
  const [fact, setFact] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      postFetch('countries', {name: name, fact: fact})
        .then((response) => {
          setName('')
          setFact('')
          setMessage('El pais se creó con éxito')
          setRefresh(true)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div>
      <h1>Crear un país</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nombre del país"
            onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div>
          <input
            type="text"
            value={fact}
            placeholder="Dato: "
            onChange={(e) => { setFact(e.target.value) }} />
        </div>

        <div>{message ? <p>{message}</p> : <br />}</div>
        <button className="btn" type="submit">Crear país</button>
      </form>
    </div>
  )
}

export default New;