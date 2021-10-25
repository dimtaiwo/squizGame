import React from "react";
import { Form } from "react-bootstrap";

const CreateRoom = () => {
  return (
    <div>
      <h2>Create Game</h2>
      <Form.Select aria-label="Topic">
        <option>Choos a Topic</option>
        <option value="1">Football</option>
        <option value="2">Computer</option>
        <option value="3">History</option>
        <option value="4">Politics</option>
        <option value="5">Game</option>
        <option value="6">Geography</option>
      </Form.Select>
      <br />
      <br />
      <Form.Select aria-label="Difficulty">
        <option>Choose Difficulty Level</option>
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Difficulty</option>
      </Form.Select>
    </div>
  );
};

export default CreateRoom;
