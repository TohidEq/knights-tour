import React from "react";
import ChessTable from "../../Chess/ChessTable";
import ChessTableVisual from "../../Chess/ChessTableVisual";

type Props = {};

const Home = (props: Props) => {
  const myChessTable = ChessTable();
  const [chessTable, setChessTable] = React.useState(ChessTable());

  const clickHandler = (e: any) => {
    console.log(e.currentTarget.id);
    const index = myChessTable.findIndex(
      (item) => item.id === e.currentTarget.id
    );
    console.log(myChessTable[index]);
    //chessTable[4].check = 3;
    myChessTable[index].check = 2;

    // check useState changes on Object
    setChessTable(myChessTable);
    console.log(myChessTable);

    firstMove();
  };

  // Get current pos:
  const getCurrnetPos = (): { x: number; y: number; id: String } => {
    const index = myChessTable.find((item) => item.check === 2);
    return { x: index!.x, y: index!.y, id: index!.id };
  };

  // First Move:
  const firstMove = () => {
    possibleMoves();
  };

  const possibleMoves = () => {
    const { x, y, id } = getCurrnetPos();

    myChessTable
      .filter((item) => item.check === 1)
      .map((item) => {
        myChessTable[myChessTable.findIndex((i) => i.id === item.id)].check = 0;
      });

    const xiy = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: -1, y: 2 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: 1, y: -2 },
      { x: -1, y: -2 },
      { x: -2, y: -1 },
    ];
    xiy.forEach((itemXY) => {
      const index = myChessTable.findIndex(
        (item) => item.x === x + itemXY.x && item.y === y + itemXY.y
      );
      console.log(
        "x:",
        x,
        " and y:",
        y,
        "  --  x+ix ",
        x + itemXY.x,
        " and y+iy:",
        y + itemXY.y,
        "  -- idnex: ",
        index
      );
      if (index >= 0) myChessTable[index].check = 1;
    });

    setChessTable(myChessTable);

    //////////////////////////////////////////////
    function getValue(x: number, y: number) {
      /////////
      var value: number = 0;

      if (x > 8 || x < 1 || y > 8 || y < 1) return -1; // this pos is not on chessBoard...

      // r:right,  l:left,  u:up,  d:down
      if (x + 2 >= 1 && x + 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) value++; // 2u 1r ╛
      if (x + 2 >= 1 && x + 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) value++; // 2u 1l ╕

      if (x - 2 >= 1 && x - 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) value++; // 2d 1r ╘
      if (x - 2 >= 1 && x - 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) value++; // 2d 1l ╒

      if (y + 2 >= 1 && y + 2 <= 8 && x - 1 >= 1 && x - 1 <= 8) value++; // 1d 2l ╜
      if (y + 2 >= 1 && y + 2 <= 8 && x + 1 >= 1 && x + 1 <= 8) value++; // 1t 2l ╙

      if (y - 2 >= 1 && y - 2 <= 8 && x - 1 >= 1 && x - 1 <= 8) value++; // 1d 2r ╖
      if (y - 2 >= 1 && y - 2 <= 8 && x + 1 >= 1 && x + 1 <= 8) value++; // 1t 2r ╓

      return value;
    } /////////
    //////////////////////////////////////////////////
  };

  return (
    <div className="test">
      <ChessTableVisual clickHandler={clickHandler} mydata={chessTable} />
      <button onClick={() => {}}>test</button>
      <hr />
      <button className="btn-daa">daa</button>
    </div>
  );
};

export default Home;
