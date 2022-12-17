import React, { useState } from "react";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import "./Main.css";
import { useRef } from "react";
const Main = () => {
  const playRef = useRef();
  const resetRef = useRef();
  const [data, SetData] = useState({
    img1: rock,
    img2: paper,
    img3: scissors,
    result: "",
    score: 0,
    score1: 0,
  });
  const rockRef = useRef();
  const paperRef = useRef();
  const scissorsRef = useRef();

  let rps = ["rock", "paper", "scissors"];

  let reset = () => {
    SetData({ ...data, score: 0, score1: 0 });
  };
  let handleScores = () => {
    if (data.score > 9) {
      SetData({ ...data, result: "You are a champion!" });
    } else if (data.score1 > 9) {
      SetData({ ...data, result: "Champion computer!" });
    }
  };

  let handleRock = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber];
    console.log(computer);
    if (computer == "rock") {
      SetData({ ...data, result: "it's a tie" });
    } else if (computer == "scissors") {
      SetData({
        ...data,
        result: "You win!",
        score: data.score + 1,
      });
    } else if (computer == "paper") {
      SetData({
        ...data,
        result: "Computer wins!",
        score1: data.score1 + 1,
      });
    }
  };
  let handlePaper = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber];
    console.log(computer);
    if (computer == "paper") {
      SetData({ ...data, result: "it's a tie" });
    } else if (computer == "scissors") {
      SetData({
        ...data,
        result: "Computer wins!",
        score: data.score1 + 1,
      });
    } else if (computer == "rock") {
      SetData({
        ...data,
        result: "You win!",
        score1: data.score + 1,
      });
    }
  };
  let handleScissors = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computer = rps[randomNumber];
    console.log(computer);
    if (computer == "scissors") {
      SetData({ ...data, result: "it's a tie" });
    } else if (computer == "paper") {
      SetData({
        ...data,
        result: "You win!",
        score: data.score + 1,
      });
    } else if (computer == "rock") {
      SetData({
        ...data,
        result: "Computer wins!",
        score1: data.score1 + 1,
      });
    }
  };

  return (
    <div className="main">
      <div className="score-section">
        <h1 className="writeup">Rock Paper Scissors</h1>
        <div>
          <p>Your score</p> <p>{data.score}</p>
        </div>
        <div>
          <p>Computer's</p> <p>{data.score1}</p>
        </div>
      </div>
      <h3 className="inst-con">Click on any circle to play </h3>
      <div className="result">
        <div
          ref={rockRef}
          className="rock-con"
          onClick={() => {
            handleRock();
            handleScores();
          }}
        >
          <img src={data.img1} alt="" /> <p>Rock</p>
        </div>
        <div
          className="paper-con"
          ref={paperRef}
          onClick={() => {
            handlePaper();
            handleScores();
          }}
        >
          <img src={data.img2} alt="" /> <p>Paper</p>
        </div>
        <div
          className="scissors-con"
          ref={scissorsRef}
          onClick={() => {
            handleScissors();
            handleScores();
          }}
        >
          <img src={data.img3} alt="" /> <p>Scissors</p>
        </div>
      </div>
      <h1>{data.result}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Main;
