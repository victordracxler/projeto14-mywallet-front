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

	function IsEmpty() {
		if (entryList.length === 0) {
			return (
				<EmptyMessage>
					Não há registros de entrada ou saída
				</EmptyMessage>
			);
		}
		return (
			<>
				<EntryListUl>{entryList?.map(IndividualEntry)}</EntryListUl>
				<TotalBalance entryList={entryList} />
			</>
		);
	}

	return (
		<>
			<Board>
				<IsEmpty />
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

const EmptyMessage = styled.div`
	width: 180px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	text-align: center;
	color: #868686;
`;
