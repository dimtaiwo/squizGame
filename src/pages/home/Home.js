import Button from "../../components/UI/Button";
import Title from "../../components/UI/Title";
import { Link } from "react-router-dom";
import BackButton from "../../components/UI/BackButton";
import "./Home.css";

export default function Home() {
  document.title = "Squiz Game";

  return (
    <div className="Home">
      <Title />
      <Link to="/join">
        <Button value="join" type="button" />
      </Link>
      <Link to="/create">
        <Button value="create" type="button" />
      </Link>
      <Link to="/leaderboard">
        <Button value="leaderboard" type="button" />
      </Link>
    </div>
  );
}
