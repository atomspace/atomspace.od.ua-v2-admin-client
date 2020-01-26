import React from 'react';

import img from '../../assets/img/space.png';
import edit from '../../assets/img/edit.svg';
import remove from '../../assets/img/remove.svg';

export const GridItem = () => (
	<div className='grid-item'>
		<div className='main-content'>
			<div><img src={img} alt="" /></div>
			<div>
				<h2>Name: Some name</h2>
				<h2>Price: 600</h2>
			</div>
		</div>
		<div className='item-actions'>
			<div>Edit</div>
			<div>Delete</div>
		</div>
	</div>
);