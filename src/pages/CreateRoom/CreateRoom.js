import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import io from "socket.io-client";
import { Form } from "react-bootstrap";
import './CreateRoom.css';

import Button from "../../components/UI/Button/Button";
import BackButton from "../../components/UI/BackButton/BackButton";

const CreateRoom = () => {
  //States
  // const [topic, setTopic] = useState("");
  // const [difficulty, setDifficulty] = useState("");
  // const [players, setNumberPlayers] = useState(1);
  // const [questions, setNumberQuestions] = useState(1);

  // const [settings, setSettings] = useState("");

  // const socketRef = useRef();
  const history = useHistory();

  const [socket, setSocket] = useState();
  if (!socket) {
    setSocket(io("http://localhost:4000/"));
  }

  // socket.on("created", (roomId) => {
  //   history.push(`/game/${roomId}`);
  // });


  const [details, setDetails] = useState({
    topic: "",
    difficulty: "",
    players: "",
    questions: "",
  });

  //handleChange

  const handleChange = (e) => {
    //e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  // Handle Create Game Click
  const handleClick = (e) => {
    e.preventDefault();

    socket.on("created", (roomId) => {
      history.push(`/game/${roomId}`);
    });

    socket.emit("create", details);
  };

  return (
    <div className="create-room">
      <h2>Create Game</h2>

      {/* User options for selecting a topic */}
      <Form.Select
        size="lg"
        aria-label="Topic"
        name="topic"
        onChange={handleChange}
      >
        <option>Choose a Topic</option>
        <option value="9">General Knowledge</option>
        <option value="17">Science & Nature</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="5">Celebrities</option>
        <option value="22">Geography</option>
      </Form.Select>
      <br />
      <br />

      {/* User options for selecting quiz difficulty */}
      <Form.Select
        size="lg"
        aria-label="Difficulty"
        name="difficulty"
        onChange={handleChange}
      >
        <option>Choose Difficulty Level</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </Form.Select>

      {/* User input for number of players */}
      <label className="input-form-field" htmlFor="players-number">
        Please input number of players:
      </label>
      <input
        className="input-form-field"
        id="players-number"
        type="number"
        name="players"
        placeholder="Enter a number"
        onChange={handleChange}
        required
      />

      {/* User input for number of questions */}
      <label className="input-form-field" htmlFor="questions-number">
        Please input number of questions:
      </label>
      <input
        className="input-form-field"
        id="questions-number"
        name="questions"
        type="number"
        placeholder="Enter a number"
        onChange={handleChange}
        required
      />
      <Button type="button" value="Create Game" onClick={handleClick} />
      <BackButton value="Go Back" />
    </div>
  );
};

export default CreateRoom;
