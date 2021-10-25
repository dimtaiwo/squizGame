import RoundedButton from "../../components/UI/roundedButton/RoundedButton";
import "./NotFound.css";

export default function NotFound() {

    document.title = "Not Found";

    return (
        <div className="Not-found">
            <img src="https://fontmeme.com/permalink/211025/74a619d3c6edf49db70376a2e373d26b.png" alt="404" />
            <img src="https://fontmeme.com/permalink/211025/21697b890719216b8c7d28c388fccabd.png" alt="Not Found" />

            <RoundedButton text="Go to Home" onClickPath="/" />
        </div>
    );
};