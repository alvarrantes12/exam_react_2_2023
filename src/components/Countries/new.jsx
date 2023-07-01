import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [fact, setFact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('countries', { name: name, fact: fact})
        .then((response) => {
          setName('');
          setFact('');
          setMessage('Creado exitosamente');
          setRefresh(true);
        })

    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Country Name"
            onChange={(e) => { setName(e.target.value); }} />
        </div>

        <div>
          <input
            type="text"
            value={fact}
            placeholder="Country Fact"
            onChange={(e) => { setFact(e.target.value); }} />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button
          type="submit">
          Save
        </button>
      </form>
    </>
  )
}

export default New;