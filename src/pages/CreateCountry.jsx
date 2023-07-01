import React, { useState } from 'react';
import Create from '../components/Countries/create';

function CreateCountry() {
    const [refresh, setRefresh] = useState(true);
    return (
        <div>
            <Create setRefresh={setRefresh} />
        </div>
    );
}

export default CreateCountry;
