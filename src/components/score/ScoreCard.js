import "./ScoreCard.css";

export default function ScoreCard(props) {
    return (
        <div className="Score-card" style={{ backgroundColor: "#016780", margin: 20 }}>
            <div className="rank">{props.rank}</div>

            <div className="name">{props.name}</div>

            <div className="topic">{props.topic}</div>

            <div className="difficulty">{props.difficulty}</div>

            <div className="score">{props.score}</div>
        </div>
    );
};
