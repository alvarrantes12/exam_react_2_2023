import React, { useState } from 'react';
import New from '../components/Countries/new';

function NewCountry() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Crear Nuevo País</h2>
      <New setRefresh={setRefresh} />
    </div>
  );
}

export default NewCountry;