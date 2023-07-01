import './Home.css';
import React, { useState } from 'react';
import Index from '../components/Countries/index';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className='' style={{ textAlign: 'center' }}>
      <h2 style={{ margin: '10px' }}>Inicio</h2>
      <Index refresh={refresh} setRefresh={setRefresh} />

    </div>
  );
}

export default Home;