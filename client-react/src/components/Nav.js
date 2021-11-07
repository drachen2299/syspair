import { Link } from "react-router-dom";
import { logout } from "../services";

const Nav = (props) => {
  const handleClick = async () => {
    // logout the user
    await logout();
    // remove the user from state
    props.setUser(null);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {props.user ? (
        <>
          <Link to="/survey">Add a Survey!</Link>
          <button onClick={handleClick}>Log out!</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Nav;