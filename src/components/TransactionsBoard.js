import styled from 'styled-components';

export default function TransactionsBoard() {
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
