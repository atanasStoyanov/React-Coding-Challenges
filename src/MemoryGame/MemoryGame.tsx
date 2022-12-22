import "./MemoryGame.css";
import { useState } from "react";

type TCardCoordinates = {
  row: number;
  column: number;
};

const getInitialGameState = () => [
  [
    { value: 0, isRevealed: false },
    { value: 3, isRevealed: false },
    { value: 4, isRevealed: false },
    { value: 1, isRevealed: false },
  ],
  [
    { value: 1, isRevealed: false },
    { value: 2, isRevealed: false },
    { value: 2, isRevealed: false },
    { value: 5, isRevealed: false },
  ],
  [
    { value: 0, isRevealed: false },
    { value: 4, isRevealed: false },
    { value: 3, isRevealed: false },
    { value: 5, isRevealed: false },
  ],
];

export const MemoryGame = () => {
  const [grid, setGrid] = useState(getInitialGameState());
  const [firstRevealedCard, setFirstRevealedCard] =
    useState<TCardCoordinates | null>(null);
  const [preventCardClicks, setPreventCardClicks] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleCardReveal = (rowIndex: number, cardIndex: number) => {
    const newGrid = [...grid];
    newGrid[rowIndex][cardIndex].isRevealed = true;
    const revealedCard = newGrid[rowIndex][cardIndex].value;
    setGrid(newGrid);

    setPreventCardClicks(true);
    if (firstRevealedCard) {
      if (
        newGrid[firstRevealedCard.row][firstRevealedCard.column].value !==
        revealedCard
      ) {
        setTimeout(() => {
          newGrid[rowIndex][cardIndex].isRevealed = false;
          newGrid[firstRevealedCard.row][firstRevealedCard.column].isRevealed =
            false;
          setFirstRevealedCard(null);
          setPreventCardClicks(false);
        }, 1000);
      } else {
        setFirstRevealedCard(null);
        setPreventCardClicks(false);

        const gameIsOver = grid.flat().every((card) => card.isRevealed);
        setGameOver(gameIsOver);
      }
      setGrid(newGrid);
    } else {
      setFirstRevealedCard({ row: rowIndex, column: cardIndex });
      setPreventCardClicks(false);
    }
  };

  const handleReset = () => {
    setGameOver(false)
    setGrid(getInitialGameState());
  };

  return (
    <div className="main">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((card, cardIndex) => (
            <div
              key={cardIndex}
              onClick={() => handleCardReveal(rowIndex, cardIndex)}
              className={
                card.isRevealed || preventCardClicks ? "revealed-card" : "card"
              }
            >
              {card.isRevealed ? card.value : " "}
            </div>
          ))}
        </div>
      ))}
      {gameOver ? (
        <div className="win">
          <div className="win-message">You WON! Congratulations! 🎉</div>
          <button className="reset-button" onClick={handleReset}>Reset game!</button>
        </div>
      ) : null}
    </div>
  );
};
