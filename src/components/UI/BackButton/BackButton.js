import { useHistory } from "react-router-dom";

export default function BackButton() {
    const history = useHistory();

    return (
        <div>
            <button aria-label="back-button" role='back-button' onClick={() => history.goBack}>
                Go back
            </button>
        </div>
    );
};