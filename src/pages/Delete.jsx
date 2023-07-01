import React, { useState } from 'react';
import Delete from '../components/Countries/delete';

function DeleteCountry() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Eliminar País</h2>
      <Delete setRefresh={setRefresh} />
    </div>
  );
}

export default DeleteCountry;