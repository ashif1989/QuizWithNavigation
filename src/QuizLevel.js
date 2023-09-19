import { useNavigate } from "react-router-dom";

let QuizLevel = () => {
  let navigate = useNavigate();

  let handleButton = (value) => {
    console.log(value);
    navigate(`/quiz/${value}`);
  };

  return (
    <>
      <h1>Select the dificulty level of Quiz</h1>
      <button onClick={() => handleButton("easy")}>Easy</button>
      <button onClick={() => handleButton("medium")}>Medium</button>
      <button onClick={() => handleButton("hard")}>Difficult</button>
    </>
  );
};

export default QuizLevel;
