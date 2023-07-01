import React from "react";

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p>No hay productos</p>

    return (

        <div style={{ display: 'flex', gap: '10px', justifyContent: "center", marginTop: '10px' }}>
            <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ padding: "1em", backgroundColor: "#FF9800", color: "white" }}>Id del pais</th>
                        <th style={{ padding: "1em", backgroundColor: "#FF9800", color: "white" }}>Nombre del pais</th>
                        <th style={{ padding: "1em", backgroundColor: "#FF9800", color: "white" }}>Dato curioso del pais</th>
                    </tr>
                </thead>

                <tbody>
                    {contents.map(({ id, name, fact }, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#FFF8E1" : "#FFF3E0" }}>
                            <td style={{ padding: "1em", textAlign: "center", fontWeight: "bold" }}>{id}</td>
                            <td style={{ padding: "1em", textAlign: "center", fontWeight: "bold" }}>{name}</td>
                            <td style={{ padding: "1em", textAlign: "center", fontWeight: "bold" }}>{fact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default List;