import React, { useContext } from 'react';
import { Modal } from '../Modal/Modal';

import img from '../../assets/img/space.png';
import { MerchContext } from '../../contexts/MerchContext';

export const GridItem = ({ merch, openModal }) => {
	let { name, price, avatar_url } = merch;
	let { setLoading } = useContext(MerchContext);

	const deleteMerch = () => {
		let conf = confirm('Are you sure');
		if (conf) {
			setLoading(true);
			fetch('http://localhost:8000/api/v1/delete-merch', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(merch)
			})
				.then(res => res.json())
				.then(data => setLoading(false))
				.catch(err => console.error(err))
		}
	}

	return (
		<div className='grid-item'>
			<div className='main-content'>
				<div><img alt='t-shirt' src={'http://localhost:8000/api/v1/image/' + avatar_url} /></div>
				<div>
					<h2>{name}</h2>
					<h2>{price} ₴</h2>
				</div>
			</div>
			<div className='item-actions'>
				<div onClick={e => openModal(e, merch)}>Edit</div>
				<div onClick={deleteMerch}>Delete</div>
			</div>
		</div>
	);
}