import { useHistory } from 'react-router-dom';

import "./RoundedButton.css";

export default function RoundedButton(props) {

    /**
     * This buttons redirects where the users wants or to the home page
     */

    // Used to push the new path so it will "redirect" withouth page refresh
    const history = useHistory();

    // Custom styles so the button can be used in many places
    const backgroundColor = props.color || "#19CACA";
    const textColour = props.textColour || "white";
    const styles = {
        "background-color": backgroundColor,
        "color": textColour,
    };

    // Text to display to the button
    const buttonText = props.text || "Home";
    const onClickPath = props.onClickPath || "/";

    // Pusing the new path to the history changes the page
    const clickHandler = (e) => {
        history.push(onClickPath);
    };

    return (
        <div className="Rounded-button">
            <button onClick={clickHandler} style={styles}>{buttonText}</button>
        </div>
    );
};
