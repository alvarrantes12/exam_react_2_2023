import React, { useState , useEffect } from 'react';
import { getFetch } from '../../commons/ApiMethods';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';

function Index ({ refresh , setRefresh }){
    const LoadingList = WithLoadingState(List);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!refresh) return
        setLoading(true);
        getFetch('countries').then((data) =>{
          setCountries(data);
          setLoading(false);
        });
          setRefresh(false);
    }, [setCountries, setLoading, refresh]);

    return(
      <div>
          <h2>Examen 2 C18512 - C16536</h2>
          <LoadingList isLoading={loading} countries={countries} />
      </div>
    )
}

export default Index;