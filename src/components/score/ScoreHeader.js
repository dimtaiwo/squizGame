import "./ScoreHeader.css";

export default function ScoreHeader() {
    return (
        <div className="Score-header">
            <div className="Score-header-rank">#</div>
            <div className="score-header-name">Name</div>
            <div className="score-header-topic">Topic</div>
            <div className="score-header-points">Points</div>
        </div>
    );
};
