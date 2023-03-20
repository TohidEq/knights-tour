import React from "react";
import ChessTable from "./ChessTable";
import useChessTable from "../../Hooks/useChessTable";

type Props = { clickHandler: any };

const ChessTableVisual = (props: Props) => {
  const { data } = useChessTable();

  const { clickHandler } = props;

  const checkBW = (x: number, y: number): boolean => {
    return (x % 2 == 0 && y % 2 != 0) || (x % 2 != 0 && y % 2 == 0);
  };

  return (
    <div className="chess-table">
      {data.map((element) => {
        var id = `x${element.x}y${element.y}`;
        return (
          <button
            key={id}
            id={id}
            className={checkBW(element.x, element.y) ? "black-h" : "white-h"}
            onClick={clickHandler}
            // disabled={Math.random() >= .5}
          >
            ♞
          </button>
        );
      })}

      
    </div>
  );
};

export default ChessTableVisual;
