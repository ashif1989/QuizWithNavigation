import { Link, Outlet } from "react-router-dom";

let Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/level">Level</Link>
      {/* <Link to="/quiz">Quiz</Link> */}

      <Outlet />
    </div>
  );
};

export default Navbar;
