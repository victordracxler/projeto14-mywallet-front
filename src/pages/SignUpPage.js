import SignUpForm from '../components/SignUpForm';
import { LogoTitle, SignUpLink } from './SignInPage';

export default function SignUpPage() {
	return (
		<>
			<LogoTitle>MyWallet</LogoTitle>
			<SignUpForm />

			<SignUpLink>Já tem uma conta? Entre agora!</SignUpLink>
		</>
	);
}
