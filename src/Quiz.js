import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

let Quiz = () => {
  const [quiz, setQuiz] = useState("");
  const [correctAns, setCorrectAns] = useState([]);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const { value } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const callApi = async () => {
      let response = await fetch("https://the-trivia-api.com/v2/questions");
      let data = await response.json();
      let filteredData = data.filter((d) => d.difficulty === value);
      console.log(filteredData);
      if (filteredData.length > 0) {
        setCorrectAns(filteredData[0].correctAnswer);
        setQuiz(filteredData[0].question.text);
        console.log(filteredData[0].correctAnswer);
      } else {
        navigate("/success");
      }
    };

    callApi();
  }, [result]);

  // useEffect(() => {
  //   setResult("");
  // }, [quiz]);

  let handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  let handleVerify = () => {
    let ansToL = answer.toLowerCase();
    let correctAnstoL = correctAns.toLowerCase();

    if (ansToL === correctAnstoL) {
      setResult("Correct, Well Done !!!");
    } else {
      setResult("Better luck next time !!!");
    }
    setAnswer("");
  };

  return (
    <div className="App">
      <h1>Quiz APP</h1>
      <label>Quiz: </label>
      {quiz}
      <br />
      <br />
      <label>Enter the Answer: </label>
      <input type="text" value={answer} onChange={(e) => handleAnswer(e)} />
      <button onClick={handleVerify}>Verify</button>
      <div>{result}</div>
    </div>
  );
};

export default Quiz;
