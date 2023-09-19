import { useNavigate } from "react-router-dom";

let Success = () => {
  let navigate = useNavigate();

  let handleButton = (value) => {
    console.log(value);
    navigate(`/quiz/${value}`);
  };
  return (
    <>
      <h1>There are NO questions for this difficulty level for now</h1>
      <h3>Try selecting different dificulty level of Quiz</h3>
      <button onClick={() => handleButton("easy")}>Easy</button>
      <button onClick={() => handleButton("medium")}>Medium</button>
      <button onClick={() => handleButton("hard")}>Difficult</button>
    </>
  );
};

export default Success;
