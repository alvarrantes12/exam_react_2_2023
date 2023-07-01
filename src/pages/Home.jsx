import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Index from '../components/countries';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            Crear
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;