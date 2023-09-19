import { useNavigate } from "react-router-dom";

let Home = () => {
  let navigate = useNavigate();

  let handleButton = () => {
    navigate("/level");
  };

  return (
    <>
      <h1>Welcome to Quiz Page</h1>
      <span>To take the quiz, please </span>
      <button onClick={handleButton}>Click here </button>
    </>
  );
};

export default Home;
