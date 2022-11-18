import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormBttn, FormInput, FormWrapper } from './SignInForm';

export default function SignUpForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const navigate = useNavigate();

	function handleSignUp(e) {
		e.preventDefault();

		const url = 'http://localhost:5000/signup';

		const body = {
			username: username,
			password: password,
			repeatPassword: repeatPassword,
			email: email,
		};

		const promise = axios
			.post(url, body)
			.then((res) => {
				console.log(res.data);
				// navigate('/');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			<FormWrapper onSubmit={handleSignUp}>
				<FormInput
					type="text"
					placeholder="Nome"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<FormInput
					type="email"
					placeholder="E-mail"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<FormInput
					type="password"
					placeholder="Senha"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<FormInput
					type="password"
					placeholder="Confirme a senha"
					required
					value={repeatPassword}
					onChange={(e) => setRepeatPassword(e.target.value)}
				/>
				<FormBttn type="submit">Entrar</FormBttn>
			</FormWrapper>
		</>
	);
}
