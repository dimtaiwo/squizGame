import React from "react";
import squidFont from '../../assets/SquizGame.png'
import squidAnimation from '../../assets/SquizGameCropped_1.gif'
import './title.css'

const Title = () => {
  return (
    <div>
      <img src={squidAnimation} alt="SQUIZ GAME" />
    </div>
  );
};

export default Title;
