import React from 'react'

const List = ({ contents }) => {
	if (!contents || contents.length === 0) return <p>No hay contenidos</p>
	return (
		<div>
			<table>
				<tr>
                    <th style={{ padding: "0 4em 0 1em" }}>ID</th>
					<th style={{ padding: "0 4em 0 1em" }}>Nombre</th>
					<th style={{ padding: "0 4em 0 1em" }}>Dato curioso</th>
				</tr>
				{contents.map(({ id, name, fact }) => (
					<tr>
						<td style={{ padding: "0 4em 0 1em" }}>{id}</td>
						<td style={{ padding: "0 4em 0 1em" }}>{name}</td>
                        <td style={{ padding: "0 4em 0 1em" }}>{fact}</td>
					</tr>
				))}
			</table>
			<br />
		</div>
	);
};
export default List;