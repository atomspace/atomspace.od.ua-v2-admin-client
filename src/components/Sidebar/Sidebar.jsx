import React from 'react';

import '../../assets/styles/Sidebar.scss';

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='user'>
				User
			</div>
			<div className='merch'>
				Merch
			</div>
			<div className='news'>
				News
			</div>
			<div className='members'>
				Members
			</div>
			<div className='orders'>
				Orders
			</div>
			<div className='logout'>
				Logout
			</div>
		</div>
	);
}