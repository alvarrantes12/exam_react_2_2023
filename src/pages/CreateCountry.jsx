import React, { useState } from 'react';
import New from '../components/countries/new';

function CreateCountries() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
        <New setRefresh={setRefresh}/>
    </div>
  );
};

export default CreateCountries;