import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import IndividualEntry from './IndividualEntry';
import TotalBalance from './TotalBalance';

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
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	function ShowMessage() {
		if (entryList.length === 0) {
			return <li>Vazio</li>;
		} else {
			return entryList?.map(IndividualEntry);
		}
	}

	return (
		<>
			<Board>
				<EntryListUl>
					<ShowMessage />
				</EntryListUl>
				<TotalBalance entryList={entryList} />
			</Board>
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
	padding: 25px 12px 10px 12px;
`;

const EntryListUl = styled.ul`
	width: 100%;
	height: 400px;
	overflow-y: scroll;
	color: #000000;
`;
