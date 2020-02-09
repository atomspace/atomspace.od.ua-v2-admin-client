import React from 'react';
import { Modal } from '../Modal/Modal';

import img from '../../assets/img/space.png';
import { MerchContext } from '../../contexts/MerchContext';

export const GridItem = ({ merch, setModal }) => {
	let { name, price } = merch;

	const openModal = (setMerchToEdit) => {
		setMerchToEdit(merch);
		setModal(true);
	}

	const deleteMerch = () => {
		let conf = confirm('Are you sure');
		if (conf) {
			fetch('http://localhost:8000/api/v1/delete-merch', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(merch)
			})
				.then(res => res.json())
				.catch(err => console.error(err))
		}
	}


	return (
		<MerchContext.Consumer>
			{({ setMerchToEdit }) => (
				<div className='grid-item'>
					<div className='main-content'>
						<div><img alt='t-shirt' src={img} /></div>
						<div>
							<h2>{name}</h2>
							<h2>{price} ₴</h2>
						</div>
					</div>
					<div className='item-actions'>
						<div onClick={() => openModal(setMerchToEdit)}>Edit</div>
						<div onClick={deleteMerch}>Delete</div>
					</div>
				</div>
			)}
		</MerchContext.Consumer>
	);
}