import React, { useState, useEffect } from 'react';
import { postFetch, putFetch } from '../commons/ApiMethods';
import Index from '../components/Countries/Index'
import New from '../components/Countries/new';

function Home() {

  const [refresh, setRefresh] = useState(true)

  


  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh} />
      <New setRefresh={setRefresh}/>
      
    </div>
  );   
}

export default Home;