import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddEntryForm from '../components/AddEntryForm';
import { PageWrapper, Title } from './MainPage';

export default function NewEntryPage() {
	const location = useLocation();
	const navigate = useNavigate();

	const { type } = location.state;

	let typeName = '';

	if (type === 'in') {
		typeName = 'entrada';
	} else if (type === 'out') {
		typeName = 'saída';
	}

	return (
		<PageWrapper>
			<EntryTitle>
				<h1>Nova {typeName}</h1>
				<ion-icon
					name="close-circle-outline"
					onClick={() => navigate('/home')}
				></ion-icon>
			</EntryTitle>

			<AddEntryForm type={type} typeName={typeName} />
		</PageWrapper>
	);
}

const EntryTitle = styled(Title)`
	margin-bottom: 40px;
`;
