import React from "react";
import ChessTable from "../../Chess/ChessTable";
import ChessTableVisual from "../../Chess/ChessTableVisual";
import { IChessTable } from "../../../Interfaces/ChessTable.interface";

type Props = {};

const Home = (props: Props) => {
  const myChessTable: IChessTable[] = JSON.parse(
    localStorage.getItem("chessData") || JSON.stringify(ChessTable())
  );
  const [chessTable, setChessTableState] = React.useState(ChessTable());

  const setChessTable = (props: IChessTable[]) => {
    setChessTableState(props);

    localStorage.setItem("chessData", JSON.stringify(props));
  };

  //   {x:1,y:1, value:2, Check: (0:false , 1:true , 2:current position, 3:pass), value:2~8 },
  console.log(222);
  const clickHandler = (e: any) => {
    e.preventDefault();

    const id = e.currentTarget.id;
    var clickedIndex = myChessTable.findIndex((item) => item.id === id);

    const x = myChessTable[clickedIndex].x;
    const y = myChessTable[clickedIndex].y;
    console.log("going to disable forever this move:", id);
    removeAllPossibleMoves();
    myChessTable[clickedIndex].currentPos = true;

    myChessTable[clickedIndex].isPass = true;

    possibleMoves({ x: x, y: y });
    setChessTable(myChessTable);

    console.log("current:", clickedIndex);
  };

  //^^^^^^^^^^^^^^^^^^^^^^^^^^^//
  // Remove all possible moves //
  const removeAllPossibleMoves = () => {
    myChessTable
      // get all possible poses
      .filter((item) => item.possiblePos)
      // map them to access to indexs
      .map((item) => {
        // get single item index in mtChessTable
        const index = myChessTable.findIndex((i) => i.id === item.id);
        // disable singe item
        myChessTable[index].possiblePos = false;
      });
    myChessTable
      // get all possible poses
      .filter((item) => item.currentPos)
      // map them to access to indexs
      .map((item) => {
        // get single item index in mtChessTable
        const index = myChessTable.findIndex((i) => i.id === item.id);
        // disable singe item
        myChessTable[index].currentPos = false;
      });
  };

  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
  // get all posible moves and make them active possiblePos(false)->(true) //
  const possibleMoves = (props: { x: number; y: number }) => {
    const { x, y } = props;

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
        (item) =>
          item.x === x + itemXY.x && item.y === y + itemXY.y && !item.isPass
      );

      if (index >= 0) myChessTable[index].possiblePos = true;
    });
  };

  ///////////////////////
  return (
    <div className="test">
      <ChessTableVisual clickHandler={clickHandler} mydata={chessTable} />
      <button
        className="btn-daa"
        onClick={() => {
          localStorage.removeItem("chessData");
          window.location.reload();
        }}
      >
        remove data
      </button>
    </div>
  );
};

export default Home;
