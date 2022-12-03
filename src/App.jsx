import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";

import "./app.css"

function App() {
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  function changeStreak(increase) {
    if (increase === true) {
      setStreak(streak + 1);
    } else {
      checkBest()
      setStreak(0);
    }
  }

  function checkBest() {
    if (streak > best) {
      setBest(streak);
    }
  }

  return (
    <div className="App">
      <Scoreboard currentStreak={streak} bestStreak={best} />
      <Game changeStreak={changeStreak} />
    </div>
  );
}

export default App;
