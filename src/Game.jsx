import { useState } from "react";
import "./game.css";

function Game(props) {
  const [clicked, setClicked] = useState([]);

  function setStreak(cmd) {
    if (cmd === true) {
      props.changeStreak(true);
    } else {
      props.changeStreak(false);
    }
  }

  function handleClick (square) {
    if (clicked.find(element => element === square.target.id) === undefined) {
        setClicked([...clicked, square.target.id])
        setStreak(true)

    } else {
        setClicked([])
        setStreak(false)
    }
  }


  return (
    <>
      <div id="quadrados">
        <div className="quadrado" id="1" onClick={handleClick}>1</div>
        <div className="quadrado" id="2" onClick={handleClick}>2</div>
        <div className="quadrado" id="3" onClick={handleClick}>3</div>
        <div className="quadrado" id="4" onClick={handleClick}>4</div>
        <div className="quadrado" id="5" onClick={handleClick}>5</div>
        <div className="quadrado" id="6" onClick={handleClick}>6</div>
        <div className="quadrado" id="7" onClick={handleClick}>7</div>
        <div className="quadrado" id="8" onClick={handleClick}>8</div>
        <div className="quadrado" id="9" onClick={handleClick}>9</div>
        <div className="quadrado" id="10" onClick={handleClick}>10</div>
      </div>
    </>
  );
}

export default Game;
