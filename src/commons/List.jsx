import React from 'react';

const List = ({ contents }) => {

    if (!contents || contents.length === 0)
    return <p style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>No hay contenido para mostrar</p>

    return (

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px',marginLeft:'20px' }}>
            <table>
                <tr>
                    <th style={{ padding: "1em", backgroundColor: "#090058", fontWeight: "bold", color: "white" }}>ID</th>
                    <th style={{ padding: "1em", backgroundColor: "#090058", fontWeight: "bold", color: "white"  }}>Nombre del País</th>
                    <th style={{ padding: "1em", backgroundColor: "#090058", fontWeight: "bold", color: "white"  }}>Dato Curioso</th>
                </tr>

                <tbody>
                    {contents.map(({ id, name, fact }) => (
                        <tr>
                            <td style={{ padding: "1em", backgroundColor: "#090058", fontWeight: "bold", color: "white", textAlign: "center"}} >{id}</td>
                            <td style={{ padding: "1em", backgroundColor: "#BECCFF", textAlign: "center"}} >{name}</td>
                            <td style={{ padding: "1em", backgroundColor: "#BECCFF", textAlign: "center"}} >{fact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;