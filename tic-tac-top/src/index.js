import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({ square, onclick }) => {
	return (
		<button onClick={onclick} className='square'>
			{square}
		</button>
	);
};

const Board = ({ squares, onClick }) => {
	const renderSquare = pos => {
		return <Square square={squares[pos]} onclick={() => onClick(pos)} />;
	};

	return (
		<div>
			<div className='board-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='board-row'>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className='board-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};

const Game = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);
	const [isGameOver, setIsGameOver] = useState(false);

	let winner = null;

	const calculateWinner = squares => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				setIsGameOver(true);
				return squares[a];
			}
		}
		if (!squares.includes(null)) {
			setIsGameOver(true);
		}
		return null;
	};

	const onClick = pos => {
		if (isGameOver || squares[pos]) {
			return;
		}
		console.log('valid', pos, isGameOver);

		const nextSquares = squares.slice();
		nextSquares[pos] = isXNext ? 'X' : 'O';
		setSquares(nextSquares);
		if (calculateWinner(nextSquares)) {
			return;
		}
		setIsXNext(!isXNext);
	};

	const status =
		(isGameOver ? 'Winner : ' : 'Next player : ') + `${isXNext ? 'X' : 'O'}`;

	return (
		<div className='game'>
			<div className='game-board'>
				<Board squares={squares} onClick={onClick} />
			</div>
			<div className='game-info'>
				<div className='status'>{status}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
};

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
