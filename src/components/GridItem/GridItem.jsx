import React, { useContext } from 'react';

import { MerchContext } from '../../contexts/MerchContext';
import { NewsContext } from '../../contexts/NewsContext';

export const GridItem = ({ item, openModal }) => {
	let fecthUrl = '';
	let header = '', description = '', news_picture_url = '', name = '', price = '', avatar_url = '', setLoading = '';
	let whichPage = Object.keys(item).includes('avatar_url');
	if (whichPage) {
		name = item.name;
		price = item.price;
		avatar_url = item.avatar_url;
		setLoading = useContext(MerchContext).setLoading;
		fecthUrl = 'http://localhost:8000/api/v1/delete-merch';
	} else {
		header = item.header;
		description = item.content;
		news_picture_url = item.news_picture_url;
		setLoading = useContext(NewsContext).setLoading;
		fecthUrl = 'http://localhost:8000/api/v1/delete-article';
	}

	const deleteMerch = () => {
		let conf = confirm('Are you sure');
		if (conf) {
			setLoading(true);
			fetch(fecthUrl, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(item)
			})
				.then(res => res.json())
				.then(data => setLoading(false))
				.catch(err => console.error(err))
		}
	}

	return (
		<div className='grid-item'>
			<div className='main-content'>
				{
					whichPage ?
						(
							<div>
								<div><img alt='t-shirt' src={'http://localhost:8000/api/v1/image/' + avatar_url} /></div>
								<div>
									<h2>{name}</h2>
									<h2>{price} ₴</h2>
								</div>
							</div>
						)
						:
						(
							<div>
								<div><img alt='t-shirt' src={'http://localhost:8000/api/v1/image/' + news_picture_url} /></div>
								<div>
									<h2>{header}</h2>
									<h2>{description}</h2>
								</div>
							</div>
						)
				}
				<div className='item-actions'>
					<div onClick={e => openModal(e, item)}>Edit</div>
					<div onClick={deleteMerch}>Delete</div>
				</div>
			</div >
		</div>
	);
}