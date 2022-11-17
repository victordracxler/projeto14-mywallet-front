import styled from 'styled-components';
import { FormBttn, FormInput, FormWrapper } from './SignInForm';

export default function SignUpForm() {
	return (
		<>
			<FormWrapper action="">
				<FormInput type="text" placeholder="Nome" required />
				<FormInput type="email" placeholder="E-mail" required />
				<FormInput type="password" placeholder="Senha" required />
				<FormInput
					type="password"
					placeholder="Confirme a senha"
					required
				/>
				<FormBttn type="submit">Entrar</FormBttn>
			</FormWrapper>
		</>
	);
}
