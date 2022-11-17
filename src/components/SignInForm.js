import styled from 'styled-components';

export default function SignInForm() {
	return (
		<>
			<FormWrapper action="">
				<FormInput type="email" placeholder="E-mail" required />

				<FormInput type="password" placeholder="Senha" required />
				<FormBttn type="submit">Entrar</FormBttn>
			</FormWrapper>
		</>
	);
}

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Raleway', sans-serif;
`;

export const FormInput = styled.input`
	width: 326px;
	height: 58px;
	background-color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 15px;
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 13px;
`;

export const FormBttn = styled.button`
	width: 326px;
	height: 46px;
	background-color: #a328d6;
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: 20px;
	font-weight: 700;
`;
