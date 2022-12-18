import React from "react";
import App from "../../App";

type Props = {};

const ChessTable = () => {
  // const chessTable = [
  //   [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8]],
  //   [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8]],
  //   [[3,1], [32, 33, 34, 35, 36, 37, 38],
  //   [[4,1], 42, 43, 44, 45, 46, 47, 48],
  //   [51, 52, 53, 54, 55, 56, 57, 58],
  //   [61, 62, 63, 64, 65, 66, 67, 68],
  //   [71, 72, 73, 74, 75, 76, 77, 78],
  //   [81, 82, 83, 84, 85, 86, 87, 88],
  // ];

  var chessTable = [];

  function getValue(x: number, y: number) {
    var value: number = 0;

    if (x > 8 || x < 1 || y > 8 || y < 1) return -1; // this pos is not on chessBoard...

    // r:right,  l:left,  u:up,  d:down
    if (x + 2 >= 1 && x + 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) value++; // 2r 1u ╛
    if (x + 2 >= 1 && x + 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) value++; // 2r 1d ╕

    if (x - 2 >= 1 && x - 2 <= 8 && y - 1 >= 1 && y - 1 <= 8) value++; // 2l 1u ╘
    if (x - 2 >= 1 && x - 2 <= 8 && y + 1 >= 1 && y + 1 <= 8) value++; // 2l 1d ╒

    if (y + 2 >= 1 && y + 2 <= 8 && x - 1 >= 1 && x - 1 <= 8) value++; // 1l 2d ╜
    if (y + 2 >= 1 && y + 2 <= 8 && x + 1 >= 1 && x + 1 <= 8) value++; // 1r 2d ╙

    if (y - 2 >= 1 && y - 2 <= 8 && x - 1 >= 1 && x - 1 <= 8) value++; // 1l 2u ╖
    if (y - 2 >= 1 && y - 2 <= 8 && x + 1 >= 1 && x + 1 <= 8) value++; // 1r 2u ╓

    return value;
  }

  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      chessTable.push({ x: x, y: y, value: getValue(x, y), isChecked: false });
    }
  }

  return { chessTable };
};

export default ChessTable;
