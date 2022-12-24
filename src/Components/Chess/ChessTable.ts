import React from "react";
import App from "../../App";

type Props = {};

const ChessTable = () => {
  // var chessTable = [
  //   {x:1,y:1, value:2, Check: (0:false , 1:true , 2:current position), value:2~8 },
  //   {...}, ...
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
      chessTable.push({ x: x, y: y, value: getValue(x, y), Check: 0 });
    }
  }

  return { chessTable };
};

export default ChessTable;
