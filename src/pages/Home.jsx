import React, {useState} from 'react';
import Index from '../components/Countries/index';
import New from '../components/Countries/new';


function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>
      <New setRefresh={setRefresh} />
      <Index refresh={refresh} setRefresh={setRefresh}/>  
    </div>
  );
}

export default Home;