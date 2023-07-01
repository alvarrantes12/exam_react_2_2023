import React from 'react';

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p>No hay paises agregados</p>

    return (
        <div>
            <h3>Paises disponibles</h3>
            <table>
                <tr>
                    <th style={{ padding: "0 4em 0 4em" }}>Id</th>
                    <th style={{ padding: "0 4em 0 4em" }}>Pais</th>
                    <th style={{ padding: "0 4em 0 4em" }}>Dato Curioso</th>
                </tr>

                {contents.map(({ id, name, fact }) => (
                    <tr>
                        <td style={{ padding: "0 4em 0 4em" }}>{id}</td>
                        <td style={{ padding: "0 4em 0 4em" }}>{name}</td>
                        <td style={{ padding: "0 4em 0 4em" }}>{fact}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;