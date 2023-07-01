import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import Swal from 'sweetalert2';

function New({setRefresh }) {
  const [name, setName] = useState('')
  const [fact, setFact] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      postFetch('countries', { name: name, fact: fact })
        .then((response) => {
          setName('')
          setFact('')
          showSuccessAlert();
        })
    } catch (error) {
      console.log(error)
    }
  }

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Creado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      setRefresh(true)
    });
  }

  return (
    <div style={{marginLeft:'50px', marginTop:'20px'}}>
      <h3>Crear un nuevo país</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            placeholder='Nombre del país'
            onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div>
          <input
            type='text'
            value={fact}
            placeholder='Dato curioso'
            onChange={(e) => { setFact(e.target.value) }} />
        </div>

        <button className='btn' type='submit'>Crear país</button>
      </form>
      <div style={{ marginBottom: '40px' }}></div> {}
    </div>
  );

}



export default New;