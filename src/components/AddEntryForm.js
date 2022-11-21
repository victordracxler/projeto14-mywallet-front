import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { FormBttn, FormInput, FormWrapper } from './SignInForm';

export default function AddEntryForm(props) {
	const { type, typeName } = props;

	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');

	const { bearer } = useContext(UserContext);

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const entry = {
			type,
			amount,
			description,
		};

		const url = 'https://api-mywallet.onrender.com/add-entry';
		const headers = {
			Authorization: bearer,
		};

		axios
			.post(url, entry, { headers })
			.then((res) => {
				console.log(res.data);
				navigate('/home');
			})
			.catch((err) => {
				console.log(err.response);
			});
	}

	return (
		<>
			<FormWrapper onSubmit={handleSubmit}>
				<FormInput
					type="number"
					step="any"
					placeholder="Valor"
					required
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<FormInput
					type="text"
					placeholder="Descrição"
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<FormBttn type="submit">Salvar {typeName}</FormBttn>
			</FormWrapper>
		</>
	);
}
