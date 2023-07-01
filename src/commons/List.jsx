import React from "react";
import '../App.css';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>Sin Paises agregados ._.</p>

    return (
        <div>
            <h4>Lista de paises y sus curiosidades principales</h4>
            <table>
                <tr>
                    <th style={{ padding: '0 4em' }}>Id</th>
                    <th style={{ padding: '0 4em' }}>Pais</th>
                    <th style={{ padding: '0 4em' }}>Curiosidad</th>
                </tr>

                {contents.map(({id, name, fact}) => (
                    <tr>
                        <td style={{ padding: '0 4em' }}>{id}</td>
                        <td style={{ padding: '0 4em' }}>{name}</td>
                        <td style={{ padding: '0 4em' }}>{fact}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;