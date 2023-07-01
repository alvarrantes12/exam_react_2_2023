import React from "react";

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No se ha guardado ningun pais!</p>;

    return (
        <div style={{ margin: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Lista de Países:</h3>
          <table style={{ borderCollapse: "separate", width: "70%", border: "2px dashed black", margin: "0 auto", marginTop: "20px" }}>
            <thead>
              <tr>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: '#6E51D9', color: "white", fontWeight: "normal" }}>Numero identificador</th>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: '#6E51D9', color: "white", fontWeight: "normal" }}>Nombre del Pais</th>
                <th style={{ padding: "0.5em", borderBottom: "2px dashed black", backgroundColor: '#6E51D9', color: "white", fontWeight: "normal" }}>Fun Fact</th>
              </tr>
            </thead>
            <tbody>
              {contents.map(({ id, name, fact }) => (
                <tr key={id}>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center", fontWeight: "bold", color: '#A08AE5'  }}>{id}</td>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center", fontWeight: "normal" }}>{name}</td>
                  <td style={{ padding: "0.5em", borderBottom: "2px dashed black", textAlign: "center", fontWeight: "normal" }}>{fact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
};

export default List;
