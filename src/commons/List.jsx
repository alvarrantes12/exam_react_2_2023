import React from "react";

const List = ({ contents }) => {

    if(!contents || contents.length == 0) return <p>Paises</p>

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th style={{ padding: "8px"}}>Nombre</th>
                    <th style={{ padding: "8px"}}>Dato</th>
                </tr>

                {contents.map(({ id, name, fact}) => (
                    <tr>
                        <td>{id}</td>
                        <td style={{ padding: "8px"}}>{name}</td>
                        <td style={{ padding: "8px"}}>{fact}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;