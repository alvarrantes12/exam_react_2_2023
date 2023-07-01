import React from 'react';

const List = ({ countries }) => {
    if (!countries || countries.length === 0) return <p>No Countries Available</p>
    return (
        <div>
        <h4>Countries Available</h4>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Country</th>
                <th>Fact</th>
            </tr>
            </thead>
            <tbody>
            {countries.map(({ id, name, fact }) => (
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{fact}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default List;