import dayjs from 'dayjs';
import styled from 'styled-components';

export default function IndividualEntry(props) {
	const { amount, description, date, type, _id } = props;

	const formatDate = dayjs(date).format('DD/MM');

	const amountNumber = Number(amount);

	return (
		<Row key={_id} type={type}>
			<div className="date-desc-container">
				<div className="date">{formatDate}</div>
				<div className="description">{description}</div>
			</div>

			<div className="amount">{amountNumber.toFixed(2)}</div>
		</Row>
	);
}

const Row = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 16px;
	height: 34px;
	align-items: center;

	.date-desc-container {
		display: flex;
		flex-direction: row;
	}
	.date {
		width: 48px;
		color: #c6c6c6;
	}
	.description {
		color: #000000;
	}
	.amount {
		color: ${(props) => (props.type === 'in' ? '#03AC00' : '#C70000')};
	}
`;
