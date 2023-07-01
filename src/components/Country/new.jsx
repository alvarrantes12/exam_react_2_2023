import React, { useState} from 'react';
import { postFetch} from '../../commons/ApiMethods';

function New ({setRefresh}){
    const [name, setName] = useState('')
    const [fact, setFact] = useState('')
    const [message, setMessage] = useState('')
     
    const handleSubmit = async (event) => {
       event.preventDefault();
       try {
         postFetch('countries', {name: name, fact: fact})
          .then((response) => {
             setName('');
             setFact('');
             setMessage('Creado correctamente');
             setRefresh(true)
         })
       } catch (error){
         console.log(error)
       }
     }
   
     return (
       <>
        <form onSubmit={handleSubmit}>
           <div>
           <input 
             type='text'
             value = {name}
             placeholder='Nombre del país'
             onChange={(e) => {setName(e.target.value);}} 
             style={{
              padding: '0.5em',
              fontSize: '16px',
              border: '1px solid lightgray',
              borderRadius: '4px',
              outline: 'none',
              boxShadow: 'none',
              width: '29%',
              boxSizing: 'border-box',
              marginTop: '10px',
              marginLeft: '20px'
          }}/>
           </div>
   
           <div>
           <input 
             type='text'
             value = {fact}
             placeholder='Dato curioso'
             onChange={(e) => {setFact(e.target.value);}} 
             style={{
              padding: '0.5em',
              fontSize: '16px',
              border: '1px solid lightgray',
              borderRadius: '4px',
              outline: 'none',
              boxShadow: 'none',
              width: '29%',
              boxSizing: 'border-box',
              marginTop: '10px',
              marginLeft: '20px'
          }} />

           </div>
           <div>{message ? <p>{message}</p> : <br />}</div >
           <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', marginLeft: '20px' }}>
           <button type ='submit' style ={{borderRadius: "4px",
                        backgroundColor: "#BECCFF",
                        padding: '15px 25px',
                        border: "none",
                        fontWeight: "bold",
                        marginLeft: '20px'}}> Crear </button>
           </div>
          
         </form>
       </>
     )
   }
   
   export default New;