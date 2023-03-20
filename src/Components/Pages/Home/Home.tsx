import React from "react";
import ChessTable from "../../Chess/ChessTable";
import ChessTableVisual from "../../Chess/ChessTableVisual";

type Props = {};

const Home = (props: Props) => {
  const { chessTable } = ChessTable();

  const index = chessTable.findIndex((item) => item.x === 4 && item.y === 7);
  //chessTable[4].check = 3;
  chessTable[index].Check = 2;
  console.log(chessTable[index]);
  const clickHandler = (e: any) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className="test">
      <ChessTableVisual clickHandler={clickHandler} />
      <button onClick={() => {}}>test</button>
      <hr />
      <button className="btn-daa">daa</button>
    </div>
  );
};

export default Home;
