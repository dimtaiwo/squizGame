import "./Result.css";

export default function Result(props) {
    return (
        <div className="Result">
            <samp>User: {props.username} - Points: {props.points}</samp>
        </div>
    );
};