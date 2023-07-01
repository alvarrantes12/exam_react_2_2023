import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { Link } from 'react-router-dom';

function Create({ setRefresh }) {
    const [name, setName] = useState('')
    const [fact, setFact] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            postFetch('countries', { name: name, fact: fact })
                .then(() => {
                    setName('');
                    setFact('');
                    setMessage('El país se creó correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ backgroundColor: "#D4FAC2", padding: "15px" }}>
                    <div>
                        <input
                            type='text'
                            value={name}
                            placeholder='Nombre del país'
                            onChange={(e) => { setName(e.target.value); }}
                            style={{
                                padding: '0.5em',
                                fontSize: '16px',
                                border: '1px solid lightgray',
                                borderRadius: '4px',
                                outline: 'none',
                                boxShadow: 'none',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={fact}
                            placeholder='Dato curioso'
                            onChange={(e) => { setFact(e.target.value); }}
                            style={{
                                padding: '0.5em',
                                fontSize: '16px',
                                border: '1px solid lightgray',
                                borderRadius: '4px',
                                outline: 'none',
                                boxShadow: 'none',
                                width: '100%',
                                boxSizing: 'border-box',
                                marginTop: '10px'
                            }}
                        />
                    </div>

                    <div>{message ? <p>{message}</p> : <br />}</div>

                    <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
                        <button type='submit' style={{
                            borderRadius: "4px",
                            backgroundColor: "#00C851",
                            padding: '15px 15px',
                            border: "none",
                            fontWeight: "bold"
                        }}>Crear</button>

                        <Link to="/">
                            <button style={{
                                borderRadius: "4px",
                                backgroundColor: "#FF4D4D",
                                padding: '15px 15px',
                                border: "none",
                                fontWeight: "bold"
                            }} >Cancelar</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;
