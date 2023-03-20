import React from "react";
import ChessTable from "./ChessTable";
import { IChessTable } from "../../Interfaces/ChessTable.interface";

type Props = { clickHandler: any; mydata: IChessTable[] };

const ChessTableVisual = (props: Props) => {
  const { clickHandler } = props;
  const { mydata: data } = props;

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
            // hanooz (ALL CH = 1 in FirstMove) ro nazadim
            disabled={element.check === 0}
            // disabled={Math.random() >= .5}
          >
            {element.check === 1
              ? "*"
              : element.check === 2
              ? "♞"
              : element.check === 3
              ? "X"
              : ""}
            {/* {element.value} */}
          </button>
        );
      })}
    </div>
  );
};

export default ChessTableVisual;
