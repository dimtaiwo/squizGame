import "./Result.css";

export default function Result(props) {
    return (
        <div className="Result">
            <center>
                <samp>User: {props.username} - Points: {props.points}</samp>
            </center>
        </div>
    );
};