import React, { useContext, useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { NewsContext } from '../../contexts/NewsContext';
import { GridItem } from '../../components/GridItem/GridItem';
import { NewsModal } from '../../components/NewsModal/NewsModal';
import plusImg from '../../assets/img/plus.svg';


export const NewsPage = () => {
	const { news, addNews, loading, setArticleToEdit } = useContext(NewsContext);
	const [modal, setModal] = useState(false);
	const [data, setData] = useState({
		modal, setModal
	});

	useEffect(() => {
		fetch('http://localhost:8000/api/v1/get-all-news')
			.then(res => res.json())
			.then(data => addNews(data))
			.catch(err => console.log(err));
		return undefined;
	}, [loading]);

	const openModal = (e, article = null) => {
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
			setArticleToEdit(article);
			setModal(true);
		}
	};

	return (
		<div className='container'>
			<Sidebar />
			<div className='main-content'>
				<div className='grid-items'>
					{news.map(article => (
						<GridItem key={article.id} openModal={openModal} item={article} />
					))}
				</div>
				<div className='add-item'><div className='add-img' onClick={e => openModal(e)}><img src={plusImg} alt='Plus' /></div></div>
			</div>
			<NewsModal modal={modal} setModal={setModal} data={data} />
		</div>
	);
}