import React, { useState } from 'react';
import './Home.css';
import New from '../components/Countries/new';
import Index  from '../components/Countries/index'; 


function Home() {

  const [refresh, setRefresh] = useState(true);

  return(
    <>
      <Index refresh ={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh}/>
    </>
  )
}

export default Home;