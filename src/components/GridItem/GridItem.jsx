import React from 'react';

import img from '../../assets/img/space.png';

export const GridItem = ({ merch }) => {
	let { name, price } = merch;
	return (
		<div className='grid-item'>
			<div className='main-content'>
				<div><img alt='t-shirt' src={img} /></div>
				<div>
					<h2>Name: {name}</h2>
					<h2>Price: {price}</h2>
				</div>
			</div>
			<div className='item-actions'>
				<div>Edit</div>
				<div>Delete</div>
			</div>
		</div>
	);
}