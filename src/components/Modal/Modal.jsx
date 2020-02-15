import React, { useState, useContext } from 'react';
import '../../assets/styles/Modal.scss';
import { MerchContext } from '../../contexts/MerchContext';
import { Loader } from '../Loader/Loader';

import closeImg from '../../assets/img/close.svg';

export const Modal = ({ modal, setModal, data }) => {
	let className = modal ? 'modal-show' : 'modal-hide';
	let { type } = data;
	const { merchToEdit, setMerchToEdit, loading, setLoading } = useContext(MerchContext);
	const [newMerch, setNewMerch] = useState({ name: '', price: '' });
	const [file, setFile] = useState('');

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
				return setModal(false);
			})
			.catch(err => {
				setLoading(false);
				return setModal(false);
			});
		return null;
	}

	const addNewMerch = merch => {
		setLoading(true);
		let form = new FormData();
		form.append('name', merch.name);
		form.append('price', merch.price);
		// form.append('photo', file);
		console.log(file);
		fetch('http://localhost:8000/api/v1/add-new-merch', {
			method: 'POST',
			// headers: { 'Content-Type': 'multipart/form-data' },
			body: form
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				return setModal(false);
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
				{type === 'add' ? (
					<div className="auth-form">
						<h2>Add new merch</h2>
						<input className='login' type="text"
							onChange={e => setNewMerch({ ...newMerch, name: e.target.value })}
							value={newMerch.name} placeholder='Merch Name' />
						<input className='password' type="number"
							onChange={e => setNewMerch({ ...newMerch, price: +e.target.value })}
							value={newMerch.price} placeholder='Price' />
						<input type="file" onChange={e => setFile(e.target.files[0])} id='merch-img' />
						<button style={{ display: loading ? 'none' : 'block' }} onClick={() => addNewMerch(newMerch)} className='submit-input'>Add</button>
						<Loader loading={loading} />
					</div>
				)
					:
					(
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
						</div>
					)}
			</div>
		</div>
	);
}