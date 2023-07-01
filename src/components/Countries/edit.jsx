import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
  const [nameEdit, setNameEdit] = useState('');
  const [factEdit, setFactEdit] = useState('');
  const [idEdit, setIdEdit] = useState('');
  const [messageEdit, setMessageEdit] = useState('');

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      putFetch(`countries/${idEdit}`, { name: nameEdit, fact: factEdit })
        .then(() => {
          setNameEdit('');
          setFactEdit('');
          setIdEdit('');
          setMessageEdit('¡Editado correctamente!');
          setRefresh(true);
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleEdit}>

        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={idEdit}
            placeholder="ID del país"
            onChange={(e) => { setIdEdit(e.target.value); }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={nameEdit}
            placeholder="Nombre del país"
            onChange={(e) => { setNameEdit(e.target.value); }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            style={{ padding: '5px', marginRight: '10px' }}
            type="text"
            value={factEdit}
            placeholder="Hecho del país"
            onChange={(e) => { setFactEdit(e.target.value); }} />
        </div>
        <div>{messageEdit ? <p>{messageEdit}</p> : <br />}</div>
        <button
          style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none' }}
          type="submit">
          Editar
        </button>

      </form>
    </>
  )
}
export default Edit;