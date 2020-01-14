import React from "react";
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
	const auth = (e) => {
		let obj = e.target.parentElement.children;
		let form = {
			user: obj[0].value,
			password: obj[1].value,
		};
		// localStorage.setItem('user', 'misha');
		fetch('http://localhost:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// history.push('/');
			})
			.catch(err => console.error(err));
	};

	const keyPress = (e) => {
		return e.key === 'Enter' ? auth() : null;
	}

	return localStorage.getItem('user') ?
		<Redirect to='/' />
		:
		(
			<div>
				<p className='admin-text'>Atom Space Admin Panel</p>
				<div className="auth-form">
					<input onKeyPress={keyPress} className='login' type="text" placeholder='Login' />
					<input onKeyPress={keyPress} className='password' type="password" placeholder='Password' />
					<input className='submit-input' type="submit" onClick={auth} value="Log in" />
				</div>
			</div>
		);
}

export default LoginForm;