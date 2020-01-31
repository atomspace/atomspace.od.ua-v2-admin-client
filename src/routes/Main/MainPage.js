import React from 'react';
import { GridItem } from '../../components/GridItem/GridItem';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import '../../assets/styles/MainPage.scss';

export const MainPage = () => {
	const merches = [
		{ id: 1, name: 'Shirt 1', price: 600 },
		{ id: 2, name: 'Shirt 2', price: 200 },
		{ id: 3, name: 'Shirt 3', price: 100 },
		{ id: 4, name: 'Shirt 4', price: 700 },
		{ id: 5, name: 'Shirt 5', price: 300 },
		{ id: 6, name: 'Shirt 6', price: 400 }
	];

	return (
		<div className='container'>
			<Sidebar />
			<div className='main-content'>
				<div className='grid-items'>
					{merches.map(merch => (
						<GridItem key={merch.id} merch={merch} />
					))}
					<div className='add-item'>+++</div>
				</div>
			</div>
		</div>
	);
};
