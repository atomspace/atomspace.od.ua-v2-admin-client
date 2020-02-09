import React, { useState, useContext } from 'react';
import '../../assets/styles/Modal.scss';
import { MerchContext } from '../../contexts/MerchContext';
import { Loader } from '../Loader/Loader';

import closeImg from '../../assets/img/close.svg';

export const Modal = ({ edit, modal, setModal }) => {
	let className = modal ? 'modal-show' : 'modal-hide';

	const { merchToEdit, setMerchToEdit, loading, setLoading } = useContext(MerchContext);
	const [message, setMessage] = useState('');

	const editMerch = merch => {
		setLoading(true);
		fetch('http://localhost:8000/api/v1/edit-merch', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(merch)
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				setMessage('Changed successfully!!!');
				setModal(false);
				return setMessage('');
			})
			.catch(err => {
				setLoading(false);
				return setModal(false);
			});
		return null;
	}

	return (
		<div className={className}>
			<div className='close-item'><div onClick={() => setModal(false)} className='add-img'><img src={closeImg} alt='Close' /></div></div>
			<div className='form'>
				<div className="auth-form">
					<h2>Edit merch info</h2>
					<input className='login' type="text"
						onChange={e => setMerchToEdit({ ...merchToEdit, name: e.target.value })}
						value={merchToEdit.name} placeholder='Merch Name' />
					<input className='password' type="number"
						onChange={e => setMerchToEdit({ ...merchToEdit, price: +e.target.value })}
						value={merchToEdit.price} placeholder='Price' />
					<button style={{ display: loading ? 'none' : 'block' }} onClick={() => editMerch(merchToEdit)} className='submit-input'>Edit</button>
					<Loader loading={loading} />
					<h2 style={{ display: message === '' ? 'none' : 'block' }}>{message}</h2>
				</div>
			</div>
		</div>
	);
}