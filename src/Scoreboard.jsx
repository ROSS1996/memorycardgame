import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <div id="scoreboard">
      <div id="currentStreak" className="scoreElements"><p className="scoreNumber">{props.currentStreak}</p><div>Current streak</div></div>
      <div id="bestStreak" className="scoreElements"><p className="scoreNumber">{props.bestStreak}</p><div>Best streak</div></div>
    </div>
  );
}

export default Scoreboard;
