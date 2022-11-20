import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import IndividualEntry from './IndividualEntry';

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

	function ShowMessage() {
		if (entryList.length === 0) {
			return <li>Vazio</li>;
		} else {
			return entryList?.map(IndividualEntry);
		}
	}
	function TotalSum() {
		if (entryList.length === 0) return 0;
		let sum = 0;

		for (let i = 0; i < entryList.length; i++) {
			if (entryList[i].type === 'in') {
				sum += Number(entryList[i].amount);
			} else if (entryList[i].type === 'out') {
				sum -= Number(entryList[i].amount);
			}
		}
		console.log('sum', sum);
		return sum;
	}

	return (
		<>
			<Board>
				<EntryListUl>
					<ShowMessage />
				</EntryListUl>
				<Balance>
					<h1>Saldo</h1>
					<h2>
						<TotalSum />
					</h2>
				</Balance>
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

const Balance = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 17px;
	background-color: #ffffff;
	margin-top: 5px;

	h1 {
		color: #000000;
		font-weight: 700;
	}

	h2 {
		font-weight: 400;
	}
`;
