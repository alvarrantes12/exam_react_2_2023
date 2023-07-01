import React from 'react';
import './List.css';
const List = ({contents}) => {
    if (!contents || !contents.length === 0) return <p>No hay contenido sobre productos</p>

    return (
        <div>
            <table className="table">
                <thead className={"thead-dark"}>
                <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Id</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre</th>
                    <th style={{padding: "0 4em 0 4em"}}>Dato Curioso</th>
                </tr>
                </thead>

                {contents.map(({id, name, fact}) => (
                    <tbody>
                    <tr>
                        <th scope={"row"}>{id}</th>
                        <td>{name}</td>
                        <td>{fact}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default List;