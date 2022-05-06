import React from 'react';
const List = () => {
	const items = [
		{
			id: 1,
			title: "Home",
		},
		{
			id: 1,
			title: "Contacts",
		},
		{
			id: 1,
			title: "About us",
		},
	];
	return (
		<ul>
			{items.map((value, i) => {
				return <li key={i}>{value.title}</li>;
			})}
		</ul>
	);
};

export default List;