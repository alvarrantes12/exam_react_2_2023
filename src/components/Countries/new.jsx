import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import '../../index.css';

function New({ setRefresh }) {
  const [name, setName] = useState('');
  const [fact, setFact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      postFetch('countries', { name: name, fact: fact })
        .then((response) => {
          setName('');
          setFact('');
          setMessage('Creado correctamente');
          setRefresh(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-form">
      <h2>Crear nuevo pais</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Nombre del pais"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={fact}
            placeholder="Factor del pais"
            onChange={(e) => {
              setFact(e.target.value);
            }}
          />
        </div>
        <div>{message ? <p>{message}</p> : <br />}</div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default New;
