import React, { useState, useEffect, useContext } from 'react';
import { GridItem } from '../../components/GridItem/GridItem';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Modal } from '../../components/Modal/Modal';
import { MerchContext } from '../../contexts/MerchContext';
import plusImg from '../../assets/img/plus.svg';

import '../../assets/styles/MainPage.scss';

export const MainPage = () => {
	const [modal, setModal] = useState(false);

	const { addMerches, merches, loading } = useContext(MerchContext);
	useEffect(() => {
		fetch('http://localhost:8000/api/v1/get-all-merch')
			.then(res => res.json())
			.then(data => addMerches(data))
			.catch(err => console.log(err));
		return undefined;
	}, [loading]);

	return (
		<div className='container'>
			<Sidebar />
			<div className='main-content'>
				<div className='add-item'><div className='add-img'><img src={plusImg} alt='Plus' /></div></div>
				<div className='grid-items'>
					{merches.map(merch => (
						<GridItem key={merch.id} setModal={setModal} merch={merch} />
					))}
				</div>
			</div>
			<Modal modal={modal} setModal={setModal} />
		</div>
	);
};
