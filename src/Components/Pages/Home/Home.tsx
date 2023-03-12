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

  return (
    <div className="test">
      
      <ChessTableVisual />
      <button
        onClick={() => {
          
      }}>test</button>
    </div>
  );
};

export default Home;
