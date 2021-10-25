import { useHistory } from "react-router-dom";

export default function BackButton() {
    const history = useHistory();

    return (
        <div>
            <button onClick={history.goBack}>
                Go back
            </button>
        </div>
    );
};