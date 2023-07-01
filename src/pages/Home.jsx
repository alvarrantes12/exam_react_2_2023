import React, { useState } from "react";
import Index from '../components/Country/index';
import New from '../components/Country/new';

function Home() {
  const [refresh, setRefresh] = useState(true)
  
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh}/>
      <New setRefresh={setRefresh}/>
    </div>
  )
}

export default Home;
