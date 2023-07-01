import React, {useState} from 'react';
import Index from '../components/Countries/index';
import New from '../components/Countries/new';
import './Home.css';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className='dark-style'>
      <New setRefresh={setRefresh} />
      <Index refresh={refresh} setRefresh={setRefresh}/>  
    </div>
  );
}

export default Home;