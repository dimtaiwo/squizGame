import { useState, useEffect } from "react";

import "./Leaderboard.css";

import ScoreCard from "../../components/score/ScoreCard";
import ScoreFilter from "../../components/score/ScoreFilter";
import RoundedButton from "../../components/UI/roundedButton/RoundedButton";
import ThreeGuards from "../../components/assets/three-guards.jpg";

export default function Leaderboard() {
  document.title = "Leaderboard";

  const sortFunction = (a, b) => {
    if (+a.points > +b.points) return -1;

    if (+a.points < +b.points) return 1;

    return 0;
  };

  const [scoreData, setScoreData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`https://squiz-game.herokuapp.com/scores`)
      .then((result) => result.json())
      .then((result) => {
        const sortedResults = result.sort(sortFunction);

        sortedResults.map((result) =>
          console.log(`${result.username} points: ${result.points}`)
        );

        setScoreData(sortedResults);
        setFilteredData(sortedResults);
      });
  }, []);

  const filterData = (topic, difficulty) => {
    // scoreData.sort(sortFunction);

    const filteredByTopic = scoreData.filter(
      (score) => score.topic === topic || topic === "all"
    );
    const filteredByDifficulty = filteredByTopic.filter(
      (score) => score.difficulty === difficulty || difficulty === "all"
    );

    setFilteredData(filteredByDifficulty);
  };

  return (
    <div className="Leaderboard container">
      <div className="Leaderboard-header">
        <RoundedButton styles={{ padding: "10px", margin: "20px" }} />
        <ScoreFilter data={scoreData} filterData={filterData} />
      </div>

      <div className="scores">
        {filteredData.map((score, i) => (
          <ScoreCard
            rank={i + 1}
            key={score._id}
            name={score.username}
            topic={score.topic}
            difficulty={score.difficulty}
            score={score.points}
          />
        ))}
      </div>
      <img className="three-guards" src={ThreeGuards} alt="" width="300px" />
    </div>
  );
}

// SIMPLE LIST WITH THE TOP 15, NAME AND SCORE
// FILTER BY TOPIC, SCORE, NAME, ETC..
