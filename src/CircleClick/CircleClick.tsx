import { MouseEvent, useState } from "react";
import "./CircleClick.css";

type TPoint = {
  x: number;
  y: number;
};

export const CircleClick = () => {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [redoPoints, setRedoPoints] = useState<TPoint[]>([]);

  const handleDrawPoint = (e: MouseEvent) => {
    const newPoint = {
      x: e.clientX,
      y: e.clientY,
    };
    const updatedPoints = [...points, newPoint];
    setPoints(updatedPoints);
  };

  const handleUndo = () => {
    const undoPoints = [...points];
    const undoPoint = undoPoints.pop();
    setPoints(undoPoints);
    undoPoint && setRedoPoints([...redoPoints, undoPoint]);
  };

  const handleRedo = () => {
    const newRedoPoints = [...redoPoints];
    const point = newRedoPoints.pop();
    setRedoPoints([...newRedoPoints]);
    point && setPoints([...points, point]);
  };

  return (
    <>
      <div className="controls">
        <button
          disabled={points.length === 0}
          onClick={handleUndo}
          className="button"
        >
          Undo
        </button>
        <button
          disabled={redoPoints.length === 0}
          onClick={handleRedo}
          className="button"
        >
          Redo
        </button>
      </div>
      <div onClick={handleDrawPoint} className="field">
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{ top: `${point.y - 10}px`, left: `${point.x - 10}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};
