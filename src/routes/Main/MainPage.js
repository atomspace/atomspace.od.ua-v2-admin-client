import React, { useState, useEffect, useContext } from 'react';
import { GridItem } from '../../components/GridItem/GridItem';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { MerchModal } from '../../components/MerchModal/MerchModal';
import { MerchContext } from '../../contexts/MerchContext';
import plusImg from '../../assets/img/plus.svg';

import '../../assets/styles/MainPage.scss';

export const MainPage = () => {
	let [modal, setModal] = useState(false);
	let { addMerches, merches, loading, setMerchToEdit } = useContext(MerchContext);
	let [data, setData] = useState({
		modal,
		setModal
	});

	useEffect(() => {
		fetch('http://localhost:8000/api/v1/get-all-merch')
			.then(res => res.json())
			.then(data => addMerches(data))
			.catch(err => console.log(err));
		return undefined;
	}, [loading]);

	const openModal = (e, merch = null) => {
		let { className } = e.target.parentElement;
		if (className === 'add-img' || className === 'add-item') {
			setData({
				...data,
				type: 'add'
			});
			setModal(true);
		} else {
			setData({
				...data,
				type: 'edit',
			});
			setMerchToEdit(merch);
			setModal(true);
		}
	};

	return (
		<div className='container'>
			<Sidebar />
			<div className='main-content'>
				<div className='grid-items'>
					{merches.map(merch => (
						<GridItem key={merch.id} openModal={openModal} item={merch} />
					))}
				</div>
				<div className='add-item'><div className='add-img' onClick={e => openModal(e)}><img src={plusImg} alt='Plus' /></div></div>
			</div>
			<MerchModal modal={modal} setModal={setModal} data={data} />
		</div>
	);
};
