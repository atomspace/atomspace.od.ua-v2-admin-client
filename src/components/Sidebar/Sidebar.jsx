import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/Sidebar.scss';
import atomspace from '../../assets/img/AtomSpace.svg';
import user from '../../assets/img/user.svg';
import merch from '../../assets/img/merch.svg';
import news from '../../assets/img/news.svg';
import members from '../../assets/img/members.svg';
import orders from '../../assets/img/orders.svg';
import logoutImg from '../../assets/img/logout.svg';

export const Sidebar = () => {

	const pages = [
		{ id: 1, name: 'user', photo: user },
		{ id: 2, name: 'merch', photo: merch },
		{ id: 3, name: 'news', photo: news },
		{ id: 4, name: 'members', photo: members },
		{ id: 5, name: 'orders', photo: orders }
	];

	return (
		<div className='sidebar'>
			<div className='sidebar-top'>
				{pages.map(({ id, name, photo }) => name === 'user' ?
					(
						<div key={id} className={name}>
							<div className='icon'><img alt={name} src={photo} /></div>
							<p className='capitalize'>{name}</p>
						</div>
					)
					:
					(
						<Link key={id} to={name}>
							<div className={name}>
								<div className='icon'><img alt={name} src={photo} /></div>
								<p className='capitalize'>{name}</p>
							</div>
						</Link>
					))}
			</div>
			<div className="sidebar-bottom">
				<Link to='/login'>
					<div onClick={() => localStorage.removeItem('token')} className='logout'>
						<div className='icon'><img alt='logout' src={logoutImg} /></div>
						<p className='capitalize'>Logout</p>
					</div>
				</Link>
				<div className='atomspace'>
					<div className="icon"><img alt='atomspace icon' src={atomspace} /></div>
				</div>
			</div>
		</div>
	);
}