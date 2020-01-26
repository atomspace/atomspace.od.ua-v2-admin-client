import React from 'react';
import { GridItem } from '../../components/GridItem/GridItem';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import '../../assets/styles/MainPage.scss';
import main from '../../assets/img/main.jpg';

export const MainPage = () => {
	console.log('MainPage');
	return (
		<div className='container'>
			<Sidebar />
			<div className='main-content'>
				<div className='grid-items'>
					<GridItem />
					<GridItem />
					<GridItem />
					<GridItem />
					<GridItem />
					<GridItem />
					<div className='add-item'>+++</div>
				</div>
			</div>
		</div>
	);
};
