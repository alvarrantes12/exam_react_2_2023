import React, { useState } from 'react';
import Index from '../components/Countries/Index';
import New from '../components/Countries/new';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="new-conteiner">
      <Index refresh={refresh} setRefresh={setRefresh} />
      <New setRefresh={setRefresh} />
    </div>
  );
}

export default Home;