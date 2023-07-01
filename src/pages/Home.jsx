import React, { useState } from 'react';
import './Home.css';
import NewCountry from '../components/Countries/new';
import Index from '../components/Countries/index';

function Home() {
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="">
      <Index refresh={refresh} setRefresh={setRefresh} />

      <NewCountry setRefresh={setRefresh} />
    </div>
  );
}

export default Home;