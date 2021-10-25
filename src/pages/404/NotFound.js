import "./NotFound.css";

export default function NotFound() {

    document.title = "Not Found";

    return (
        <div className="Not-found">
            <div className="not-found-img">
                <img src="https://fontmeme.com/permalink/211025/68f97e371269e25d7746e331bb5f4439.png" alt="404" />
                <img src="https://fontmeme.com/permalink/211025/ee5a98108c2d7bad158bedaa92c1f20b.png" alt="Not Found" />
            </div>
        </div>
    );
};