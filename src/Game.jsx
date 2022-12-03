import { useState } from "react";
import "./game.css";

import Img0 from '../public/images/0.jpg'
import Img1 from '../public/images/1.jpg'
import Img2 from '../public/images/2.jpg'
import Img3 from '../public/images/3.jpg'
import Img4 from '../public/images/4.jpg'
import Img5 from '../public/images/5.jpg'
import Img6 from '../public/images/6.jpg'
import Img7 from '../public/images/7.jpg'
import Img8 from '../public/images/8.jpg'
import Img9 from '../public/images/9.jpg'

const images = [Img0, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]

function Square(props) {
  return (
    <div
      className="square"
      id={props.squareID}
      onClick={props.clickHandler}
      style={{
        backgroundImage: "url(" + images[props.squareID] + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  );
}

function Game(props) {
  const [clicked, setClicked] = useState([]);

  const squareList = [];
  for (let i = 0; i < 10; i++) {
    squareList.push(<Square squareID={i} clickHandler={handleClick} key={i} />);
  }

  function setStreak(cmd) {
    if (cmd === true) {
      props.changeStreak(true);
    } else {
      props.changeStreak(false);
    }
  }

  function handleClick(square) {
    if (clicked.find((element) => element === square.target.id) === undefined) {
      setClicked([...clicked, square.target.id]);
      setStreak(true);
    } else {
      setClicked([]);
      setStreak(false);
    }
  }

  return (
    <>
      <div id="squares">{squareList}</div>
    </>
  );
}

export default Game;
