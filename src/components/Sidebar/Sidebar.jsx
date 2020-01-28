import React from 'react';

import '../../assets/styles/Sidebar.scss';
import user from '../../assets/img/user.svg';
import atomspace from '../../assets/img/AtomSpace.svg';
import merch from '../../assets/img/merch.svg';
import news from '../../assets/img/news.svg';
import members from '../../assets/img/members.svg';
import orders from '../../assets/img/orders.svg';
import logout from '../../assets/img/logout.svg';

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-top'>
				<div className='user'>
					<div className="icon"><img src={user} /></div>
					<p>User</p>
				</div>
				<div className='merch'>
					<div className="icon"><img src={merch} /></div>
					<p>Merch</p>
				</div>
				<div className='news'>
					<div className="icon"><img src={news} /></div>
					<p>News</p>
				</div>
				<div className='members'>
					<div className="icon"><img src={members} /></div>
					<p>Members</p>
				</div>
				<div className='orders'>
					<div className="icon"><img src={orders} /></div>
					<p>Orders</p>
				</div>
			</div>
			<div className='sidebar-bottom'>
				<div className='logout'>
					<div className="icon"><img src={logout} /></div>
					<p>Logout</p>
				</div>
				<div className='atomspace'>
					<div className="icon"><img src={atomspace} /></div>
				</div>
			</div>
		</div>
	);
}