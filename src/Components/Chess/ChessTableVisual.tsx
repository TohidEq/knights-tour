import { IChessTable } from "../../Interfaces/ChessTable.interface";

type Props = {
  clickHandler: any;
  mydata: IChessTable[];
  yesWeHaveAPossibleMove: boolean;
  hasWon: boolean;
};

const ChessTableVisual = (props: Props) => {
  const { clickHandler } = props;
  const { mydata: data } = props;
  const { yesWeHaveAPossibleMove } = props;
  const { hasWon } = props;

  const checkBW = (x: number, y: number): boolean => {
    return (x % 2 == 0 && y % 2 != 0) || (x % 2 != 0 && y % 2 == 0);
  };

  return (
    <div className={`chess-table ${hasWon? "YOU_WON":""}`}>
      <div className="chess-header">
        <h1>
          <a href="/">
            Knight's Tour
          </a>
          <a href="https://github.com/tohideq/knights-tour">
            <span className="github text-sm p-3" >
              {"GitHhub"}
            </span>
          </a>
        </h1>
        <button
          className={`btn-restart ${yesWeHaveAPossibleMove ? " ":"YOU_LOST "} ` }
          onClick={() => {
            localStorage.removeItem("chessData");
            window.location.reload();
          }}
        >
          <img src="/replay.svg" alt="Logo" />
        </button>
      </div>
      <div className="chess-board">
        {data.map((element) => {
          var id = `x${element.x}y${element.y}`;
          return (
            <button
              key={id}
              id={id}
              className={`
                ${checkBW(element.x, element.y) ? "black-h " : "white-h "}
                ${element.currentPos ?
                yesWeHaveAPossibleMove ? "current-pos " :
                  (hasWon ? "YOU_WON" : "YOU_LOST") :
                element.isPass ? "is-passed " :
                element.possiblePos ? "possible " : ""
                }
                `
              }
              onClick={clickHandler}
              // hanooz (ALL CH = 1 in FirstMove) ro nazadim
              disabled={!element.possiblePos}
              // disabled={Math.random() >= .5}
            >
              {element.currentPos
                ? <img src="/icon.svg" alt="Logo" />
                : element.isPass
                ? ""
                : element.possiblePos
                ? ""
                : ""}
              {/* {element.value} */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChessTableVisual;
