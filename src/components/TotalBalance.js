import styled from 'styled-components';

export default function TotalBalance(props) {
	const { entryList } = props;

	const colorCodes = {
		black: '#000000',
		green: '#03AC00',
		red: '#C70000',
	};

	let sum = 0;

	entryList.forEach((entry) => {
		if (entry.type === 'in') {
			sum += Number(entry.amount);
		} else if (entry.type === 'out') {
			sum -= Number(entry.amount);
		}
	});

	let color = colorCodes.black;

	if (sum > 0) {
		color = colorCodes.green;
	} else if (sum < 0) {
		color = colorCodes.red;
	}

	return (
		<Balance color={color}>
			<h1>Saldo</h1>
			<h2>{sum.toFixed(2)}</h2>
		</Balance>
	);
}

const Balance = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	justify-content: space-between;
	font-size: 17px;
	background-color: #ffffff;
	margin-top: 5px;
	align-self: end;

	h1 {
		color: #000000;
		font-weight: 700;
	}

	h2 {
		font-weight: 400;
		color: ${(props) => props.color};
	}
`;
