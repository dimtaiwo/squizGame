import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BackButton from "../../components/UI/BackButton/BackButton";
import frontmanMask from "../../components/assets/fontman-mask.png";
import "./Home.css";

// Create the keyframes
const rotate = keyframes`
    from {
        transform: rotate(-360deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 1.5s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function Home() {
  document.title = "Squiz Game";

  return (
    <div className="Home">
      <Title />
      <Link to="/join">
        <Button value="Join" type="button" />
      </Link>
      <Link to="/create">
        <Button value="Create" type="button" />
      </Link>
      <Link to="/leaderboard">
        <Button value="Leaderboard" type="button" />
      </Link>
      <BackButton />
      <Rotate>
        <img
          className="frontman-mask"
          src={frontmanMask}
          alt=""
          width="100px"
        />
      </Rotate>
    </div>
  );
}
