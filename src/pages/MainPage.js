import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TransactionsBoard from '../components/TransactionsBoard';
import UserContext from '../context/UserContext';

export default function MainPage() {
	const { user, bearer } = useContext(UserContext);
	const navigate = useNavigate();

	if (!user && !bearer) {
		return navigate('/');
	}

	function signOut() {
		// localStorage.removeItem('mwuser');
		// localStorage.removeItem('mwtoken');
		localStorage.clear();
		navigate('/');
	}

	return (
		<PageWrapper>
			<Title>
				<h1>Olá, {user}</h1>
				<ion-icon name="exit-outline"></ion-icon>
			</Title>

			<TransactionsBoard />

			<BttnsWrapper>
				<AddEntryBttn
					onClick={() =>
						navigate('/new-entry', { state: { type: 'in' } })
					}
				>
					<ion-icon
						name="add-circle-outline"
						onClick={() => signOut()}
					></ion-icon>
					<h2>Nova entrada</h2>
				</AddEntryBttn>
				<AddEntryBttn
					onClick={() =>
						navigate('/new-entry', { state: { type: 'out' } })
					}
				>
					<ion-icon name="remove-circle-outline"></ion-icon>
					<h2>Nova saída</h2>
				</AddEntryBttn>
			</BttnsWrapper>
		</PageWrapper>
	);
}

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px 25px 16px 25px;
	font-family: 'Raleway', sans-serif;
`;

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 326px;
	margin-bottom: 22px;
	color: #ffffff;
	font-size: 26px;

	h1 {
		font-weight: 700;

		line-height: 31px;
	}
`;

const BttnsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 326px;
	margin-top: 13px;
`;

export const AddEntryBttn = styled.div`
	width: 155px;
	height: 114px;
	background-color: #a328d6;
	color: #ffffff;
	border-radius: 5px;
	font-weight: 700;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	ion-icon {
		font-size: 25px;
	}
	h2 {
		font-size: 17px;
		width: 64px;
	}
`;
