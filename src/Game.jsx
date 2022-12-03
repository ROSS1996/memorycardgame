import { useState } from "react";
import "./game.css";



function Square (props) {
  let image = "../public/" + props.squareID + ".jpg"
  return <div className="square" id={props.squareID} onClick={props.clickHandler} style={{
    backgroundImage: "url(" + image + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}></div>
}

function Game(props) {
  const [clicked, setClicked] = useState([]);

  const squareList = [];
  for(let i = 0;i < 10;i++) {
    squareList.push(<Square squareID={i} clickHandler={handleClick} key={i}/>);
  }


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
      <div id="squares">
          {squareList}
      </div>
    </>
  );
}

export default Game;
