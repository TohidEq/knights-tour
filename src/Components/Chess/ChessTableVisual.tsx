import React from "react";
import ChessTable from "./ChessTable";

type Props = {};

const ChessTableVisual = (props: Props) => {
  var chessTableIds: string[] = [];
  var ChessTableClassName: any = {};

  const checkBW = (x: number, y: number): boolean => {
    return (x % 2 == 0 && y % 2 != 0) || (x % 2 != 0 && y % 2 == 0);
  };

  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      chessTableIds.push(`x${x}y${y}`);
      ChessTableClassName[`x${x}y${y}`] = checkBW(x, y);
    }
  }

  return (
    <div className="chess-table">
      {chessTableIds.map((id) => (
        <button
          key={id}
          id={id}
          className={ChessTableClassName[id] ? "black-h" : "white-h"}
          // disabled={Math.random() >= .5}
        >
          ♞
        </button>
      ))}
    </div>
  );
};

export default ChessTableVisual;
