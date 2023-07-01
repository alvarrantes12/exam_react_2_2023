import React, { useState } from 'react';
import Edit from '../components/Countries/edit';

function EditCountry() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Editar País</h2>
      <Edit setRefresh={setRefresh} />
    </div>
  );
}

export default EditCountry;