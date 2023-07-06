import { useState } from "react";
import Card from "./Card";
import Result from "./Result";
import data from "../../data/quiz.json";
import "./QuizApp.css";

const quizLength = data.length;

export default function QuizApp () {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {

  };

  const handleReset = () => {

  };
  
  return(
    <>
    {
      !showResult
        ? <Card
            data={data}
            quizId={quizId}
            quizLength={quizLength}
            handleAnswer={handleAnswer} />

        : <Result
            score={score}
            quizLength={quizLength}
            handleReset={handleReset} />
    }
    </>
  );
};
