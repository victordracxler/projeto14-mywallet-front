import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/UserContext';

export default function TransactionsBoard() {
	const [entryList, setEntryList] = useState([]);
	const { bearer } = useContext(UserContext);

	useEffect(() => {
		const headers = {
			Authorization: bearer,
		};

		const url = 'http://localhost:5000/entries';

		axios
			.get(url, { headers })
			.then((res) => {
				setEntryList(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	return (
		<>
			<Board></Board>
		</>
	);
}

const Board = styled.div`
	width: 326px;
	height: 446px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
