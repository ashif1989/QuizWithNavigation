import Home from "./Home";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import QuizLevel from "./QuizLevel";
import Success from "./Success";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="level" element={<QuizLevel />} />
          <Route path="quiz/:value" element={<Quiz />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
}
