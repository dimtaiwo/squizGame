import { useState } from "react";

import "./Leaderboard.css";

import ScoreCard from "../../components/score/ScoreCard";
import ScoreFilter from "../../components/score/ScoreFilter";
import RoundedButton from "../../components/UI/roundedButton/RoundedButton";
import getData from "./data";

export default function Leaderboard() {
    document.title = "Leaderboard";

    const sortFunction = (a, b) => {
        if (a.score > b.score)
            return -1;

        if (a.score < b.score)
            return 1;

        return 0;
    };

    const scoreData = getData().sort(sortFunction);

    const [filteredData, setFilteredData] = useState(scoreData);


    const filterData = (topic, difficulty) => {
        scoreData.sort(sortFunction);

        const filteredByTopic = scoreData.filter(score => score.topic === topic || topic === "all");
        const filteredByDifficulty = filteredByTopic.filter(score => score.difficulty === difficulty || difficulty === "all");

        setFilteredData(filteredByDifficulty);
    };

    return (
        <div className="Leaderboard container">
            <div className="Leaderboard-header">
                <RoundedButton styles={{ padding: "10px", margin: "20px" }} />
                <ScoreFilter data={scoreData} filterData={filterData} />
            </div>

            <div className="scores">
                {filteredData.map((score, i) => <ScoreCard rank={i + 1} key={score.id} name={score.name} topic={score.topic} difficulty={score.difficulty} score={score.score} />)}
            </div>
        </div>
    );
};

// SIMPLE LIST WITH THE TOP 15, NAME AND SCORE
// FILTER BY TOPIC, SCORE, NAME, ETC..