import React, { useState } from "react";
import Index from '../components/Country/index';

function Home() {
  const [refresh, setRefresh] = useState(true)
  
  return (
    <div>
      <Index refresh={refresh} setRefresh={setRefresh}/>
    </div>
  )
}

export default Home;
