import React from "react";
import App from "../../App";

type Props = {};

const ChessTable = () => {
  // var chessTable = [
  //   {x:1,y:1, value:2, Check: (0:false , 1:true , 2:current position, 3:pass), value:2~8 },
  //   {...}, ...
  // ];

  var chessTable = [];

  function getValue(x: number, y: number) {
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
  }

  for (var x = 1; x <= 8; x++) {
    for (var y = 1; y <= 8; y++) {
      chessTable.push({
        id: `x${x}y${y}`, // ex: id=x3y5
        x: x,
        y: y,
        value: getValue(x, y),
        check: 1,
      });
    }
  }

  return chessTable;
};

export default ChessTable;
