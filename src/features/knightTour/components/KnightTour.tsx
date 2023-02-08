import React, { useState } from 'react';

interface SquareProps {
	x: number;
	y: number;
	knightX: number;
	knightY: number;
	visitedSquares: Set<string>;
}

const Square: React.FC<SquareProps> = ({ x, y, knightX, knightY, visitedSquares }) => {
	const isKnight = x === knightX && y === knightY;

	return (
		<td
			style={{
				width: '80px',
				height: '80px',
				backgroundColor: (x + y) % 2 === 0 ? 'white' : 'gray',
				textAlign: 'center',
				verticalAlign: 'middle'
			}}
		>
			{isKnight ? (
				<span role="img" aria-label="knight" style={{ fontSize: '4rem' }}>♞</span>
			) : visitedSquares.has(`${x},${y}`) ? (
				<span role="img" aria-label="checkmark" style={{ fontSize: '2rem' }}>✔️</span>
			) : null}
		</td>
	);
};

interface BoardProps {
	solution: [number, number][];
}

const Board: React.FC<BoardProps> = ({ solution }) => {
	const [knightX, setKnightX] = useState(solution[0][0]);
	const [knightY, setKnightY] = useState(solution[0][1]);
	const [step, setStep] = useState(0);
	const [visitedSquares, setVisitedSquares] = useState(new Set<string>());

	React.useEffect(() => {
		setVisitedSquares((visitedSquares) => {
			visitedSquares.add(`${knightX},${knightY}`);
			return visitedSquares;
		});
	}, [knightX, knightY]);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setStep((step) => (step + 1) % solution.length);
			setKnightX(solution[step][0]);
			setKnightY(solution[step][1]);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [solution, step]);

	return (
		<table style={{ borderCollapse: 'collapse' }}>
			<tbody>
				{Array.from({ length: 8 }, (_, i) => (
					<tr key={i}>
						{Array.from({ length: 8 }, (_, j) => (
							<Square
								key={j}
								x={i}
								y={j}
								knightX={knightX}
								knightY={knightY}
								visitedSquares={visitedSquares}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Board;

