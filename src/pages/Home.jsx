import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/countries/index';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh} />

      <div style={{ display: 'grid', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
  <Link to="/create" style={{ textDecoration: 'none' }}>
    <button
      style={{
        backgroundColor: '#B0E212',
        color: '#FFFFFF',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '10px',
        fontWeight: 'bold'
      }}
    >
      Nuevo
    </button>
    </Link>
      </div>
    </div>
  );
};

export default Home;









