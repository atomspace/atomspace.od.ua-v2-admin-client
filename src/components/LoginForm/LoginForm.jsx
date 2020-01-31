import React, { useState } from "react";
import history from '../../history';

export const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const auth = () => {
		let form = {
			username,
			password,
		};
		fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		})
			.then(res => res.json())
			.then(data => {
				localStorage.setItem('token', data.accessToken);
				history.push('/merch');
				window.location.reload();
			})
			.catch(err => console.error(err));
	};

	const keyPress = (e) => {
		return e.key === 'Enter' ? auth() : null;
	}

	return (
		<div>
			<p className='admin-text'>Atom Space Admin Panel</p>
			<div className="auth-form">
				<input onKeyPress={keyPress} onChange={(e) => setUsername(e.target.value)} className='login' type="text" placeholder='Login' />
				<input onKeyPress={keyPress} onChange={(e) => setPassword(e.target.value)} className='password' type="password" placeholder='Password' />
				<input className='submit-input' type="submit" onClick={auth} value="Log in" />
			</div>
		</div>
	);
}