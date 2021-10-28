import { useState, useEffect } from "react";

import "./ScoreFilter.css";

export default function ScoreFilter(props) {

    const filteredTopics = [];
    const filteredDifficulties = [];

    const [filterTopic, setFilterTopic] = useState("all");
    const [filterDifficulty, setFilterDifficulty] = useState("all");

    props.data.map(score => {
        if (!filteredTopics.includes(score.topic))
            filteredTopics.push(score.topic);

        if (!filteredDifficulties.includes(score.difficulty))
            filteredDifficulties.push(score.difficulty);

        return 0;
    });

    useEffect(() => {
        props.filterData(filterTopic, filterDifficulty);
    }, [filterTopic, filterDifficulty]);

    const topicChangeHandler = (e) => {
        setFilterTopic(e.target.value);
    };

    const difficultyChangeHandler = (e) => {
        setFilterDifficulty(e.target.value);
    };

    return (
        <div className="Score-filter" role="score-filter" aria-label="score-filter">
            <div className="Score-filter-by">Filter by</div>

            <div className="Score-filter-topic">Topic</div>
            <select onChange={topicChangeHandler}>
                <option value="all">All</option>
                {filteredTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
            </select>

            <div className="Score-filter-difficulty">Difficulty</div>
            <select onChange={difficultyChangeHandler}>
                <option value="all">All</option>
                {filteredDifficulties.map((difficulty) => <option key={difficulty} value={difficulty}>{difficulty}</option>)}
            </select>
        </div>
    );
};
