// export interface IHello {
//   name: string;
//   enthusiasmLevel?: number;
// }

export interface IChessTable {
  id: String;
  x: number;
  y: number;
  // check: number;

  currentPos: boolean;
  possiblePos: boolean;
  isPass: boolean;
  value: number;
}
