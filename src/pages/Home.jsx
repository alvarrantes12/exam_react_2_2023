import React, { useState } from 'react';
import './Home.css';
import { postFetch } from '../commons/ApiMethods';
import Index from '../components/Countries/Index';

function Home() {
  const [name, setName] = useState('')
  const [fact, setFact] = useState('')
  const [message, setMessage] = useState('')
  const [refresh, setRefresh] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      postFetch('countries', { name: name, fact: fact })
        .then((response) => {
          setName('')
          setFact('')
          setMessage('Creado con exito!')
          setRefresh(true)
        })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="new-container">
      <h3>Crear un nuevo país</h3>
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
            placeholder="Dato curioso"
            onChange={(e) => { setFact(e.target.value) }} />
        </div>
        
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button className="btn" type="submit">Crear país</button>
        <div>
          <Index refresh={refresh} setRefresh={setRefresh}/>
        </div>
      </form>
    </div>
  );

}



export default Home;