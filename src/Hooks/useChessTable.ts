import React from "react";
import ChessTable from "../Components/Chess/ChessTable";

type Props = {};

interface IChessTable {
  x: number;
  y: number;
  check: number;
  value: number;
}

const { chessTable: defaultChessTable } = ChessTable();

export default function useChessTable() {
  const [data, setData] = React.useState<IChessTable[]>(
    JSON.parse(
      localStorage.getItem("mychesstable") || JSON.stringify(defaultChessTable)
    )
  );
  React.useEffect(() => {
    localStorage.setItem("mychesstable", JSON.stringify(data));
  }, [data]);

  return { data, setData };
}
