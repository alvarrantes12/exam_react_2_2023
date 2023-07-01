import React, { useState, useEffect } from 'react';
import List from '../../commons/List';
import WithLoadingState from '../../commons/WithLoadingState';
import { getFetch } from '../../commons/ApiMethods';

function Index({ refresh, setRefresh }) {
    const LoadingList = WithLoadingState(List)
    const [contents, setContents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!refresh) return
        setLoading(true)
        getFetch('countries').then((data) => {
            setContents(data)
            setLoading(false)
        });
        setRefresh(false)
    }, [setContents, setLoading, refresh])

    return (
        <div style= {{marginLeft: '20px'}}>
            <h1>Examen II </h1>
            <h2>C01950-C09317</h2>
            <LoadingList isloading={loading} contents={contents} />
        </div>
    )
};

export default Index;