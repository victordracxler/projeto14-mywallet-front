import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';

export default function SignInPage() {
	const navigate = useNavigate();
	return (
		<>
			<LogoTitle>MyWallet</LogoTitle>
			<SignInForm />

			<SignUpLink onClick={() => navigate('/cadastro')}>
				Primeira vez? Cadastre-se!
			</SignUpLink>
		</>
	);
}

// font-family: 'Raleway', sans-serif;
// font-family: 'Saira Stencil One', cursive;

export const LogoTitle = styled.h1`
	font-family: 'Saira Stencil One', cursive;
	font-size: 32px;
	font-weight: 400;
	color: #ffffff;
	text-align: center;
	margin-top: 159px;
	margin-bottom: 24px;
`;

export const SignUpLink = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-size: 15px;
	color: #ffffff;
	font-weight: 700;
	text-align: center;
	margin-top: 36px;
`;
