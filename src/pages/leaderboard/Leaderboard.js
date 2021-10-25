import { useState, useEffect } from "react";

import ScoreCard from "../../components/score/ScoreCard";
import ScoreFilter from "../../components/score/ScoreFilter";
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


    const filterData = (topic) => {
        scoreData.sort(sortFunction);

        // if (topic === "all") {
        //     setFilteredData(scoreData);
        //     return;
        // }

        setFilteredData(scoreData.filter(score => score.topic === topic || topic === "all"));
    };

    return (
        <div className="Leaderboard container">

            <ScoreFilter data={scoreData} filterData={filterData} />

            <div className="scores">
                {filteredData.map((score, i) => <ScoreCard rank={i + 1} key={score.id} name={score.name} difficulty={score.difficulty} topic={score.topic} score={score.score} />)}
            </div>
        </div>
    );
};

// SIMPLE LIST WITH THE TOP 15, NAME AND SCORE
// FILTER BY TOPIC, SCORE, NAME, ETC..