import React, { useState, useContext } from 'react';
import '../../assets/styles/Modal.scss';
import { NewsContext } from '../../contexts/NewsContext';
import { Loader } from '../Loader/Loader';

import closeImg from '../../assets/img/close.svg';

export const NewsModal = ({ modal, setModal, data }) => {
	let className = modal ? 'modal-show' : 'modal-hide';
	let { type } = data;
	const { articleToEdit, setArticleToEdit, loading, setLoading } = useContext(NewsContext);
	const [newArticle, setNewArticle] = useState({ header: '', content: '' });
	const [file, setFile] = useState('');

	const editArticle = article => {
		setLoading(true);
		fetch('http://localhost:8000/api/v1/edit-article', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(article)
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

	const addArticlePhoto = async photo => {
		let form = new FormData();
		form.append('photo', photo);
		await fetch('http://localhost:8000/api/v1/add-news-photo', {
			method: 'POST',
			body: form
		})
			.then(res => res.json())
			.catch(err => err.json());
	};

	const addNewArticle = () => {
		setLoading(true);
		fetch('http://localhost:8000/api/v1/add-new-article', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...newArticle, news_picture_url: 'news/' + file.name })
		})
			.then(res => res.json())
			.then(data => {
				addArticlePhoto(file);
				setLoading(false);
				return setModal(false);
			})
			.catch(err => {
				setLoading(false);
				return setModal(false);
			})
		return null;
	}

	const autoExpand = e => {
		e.target.style.height = 'auto';
		// for box-sizing other than "content-box" use:
		// el.style.cssText = '-moz-box-sizing:content-box';
		e.target.style.height = e.target.scrollHeight + 'px';
	}

	return (
		<div className={className}>
			<div className='close-item'><div onClick={() => setModal(false)} className='add-img'><img src={closeImg} alt='Close' /></div></div>
			<div className='form'>
				{type === 'add' ? (
					<div className="auth-form">
						<h2>Add new article</h2>
						<input className='login' type="text"
							onChange={e => setNewArticle({ ...newArticle, header: e.target.value })}
							value={newArticle.header} placeholder='Article Name' />
						<textarea class='auto-expand' rows='1' placeholder='Content'
							onChange={e => setNewArticle({ ...newArticle, content: e.target.value })}
							value={newArticle.content} onKeyDown={e => autoExpand(e)}
						></textarea>
						<input name='merch-image' type="file" onChange={e => setFile(e.target.files[0])} id='news-img' />
						<button style={{ display: loading ? 'none' : 'block' }} onClick={() => addNewArticle()} className='submit-input'>Add</button>
						<Loader loading={loading} />
					</div>
				)
					:
					(
						<div className="auth-form">
							<h2>Edit article info</h2>
							<input className='login' type="text"
								onChange={e => setArticleToEdit({ ...articleToEdit, header: e.target.value })}
								value={articleToEdit.header} placeholder='Article Name' />
							<textarea class='auto-expand' rows='1' placeholder='Content'
								onChange={e => setArticleToEdit({ ...articleToEdit, content: e.target.value })}
								value={articleToEdit.content} onKeyDown={e => autoExpand(e)}
							></textarea>
							<button style={{ display: loading ? 'none' : 'block' }} onClick={() => editArticle(articleToEdit)} className='submit-input'>Edit</button>
							<Loader loading={loading} />
						</div>
					)}
			</div>
		</div>
	);
}