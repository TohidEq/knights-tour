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
