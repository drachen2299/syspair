import { useState } from "react";
import { userSignUp } from "../services";

const Register = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
    };
    const user = await userSignUp(newUser);
    props.setUser(user);
  }

  return (
    <section>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default Register;