import React, { useState } from 'react';
import './Home.css';
import Index from '../components/Countries/index';
import New from '../components/Countries/new';

function Home() {
  const [refresh, setRefresh] = useState(true)

  return (
    <div className="new-container">
      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh}/>
    </div>
  );

}

export default Home;