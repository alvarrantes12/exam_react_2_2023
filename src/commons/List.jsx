import React from 'react';

const List = ({ contents }) => {

  if(!contents || contents.lenght === 0) return <p>No hay Datos</p>

  return (
    <div style={{marginTop: '10px'}}>
      <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>Datos Disponibles</h4>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{padding: '4px', borderBottom: '1px solid'}}>Id</th>
            <th style={{padding: '4px', borderBottom: '1px solid'}}>Nombre</th>
            <th style={{padding: '4px', borderBottom: '1px solid'}}>Dato Curioso</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name, fact }) => (
            <tr key={id}>
              <td style={{padding: '4px', borderBottom: '1px solid'}}>{id}</td>
              <td style={{padding: '4px', borderBottom: '1px solid'}}>{name}</td>
              <td style={{padding: '4px', borderBottom: '1px solid'}}>{fact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;