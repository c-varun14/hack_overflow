import { useContext, useState } from "react";
import styles from "../Sign.module.css";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

const Signin = () => {
  const [formError, setFormError] = useState();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  if (!user) return <h1>Loading...</h1>;
  else if (user.userId) {
    return <Navigate to="/" />;
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/signin", userInput);
      setUser(data);
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <div className={styles.sign}>
      <h2>Signin</h2>
      <form
        style={{ width: "80vw", margin: "0 auto" }}
        onSubmit={formSubmitHandler}
      >
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="email"
          type="email"
          placeholder="email*"
        />
        <input
          onChange={(e) => {
            setUserInput((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="password"
          type="password"
          placeholder="password*"
        />
        {formError && <p className={styles.errorMessage}>{formError}</p>}
        <button className={`${styles.btn} ${styles.submitBtn}`} type="submit">
          Submit
        </button>
      </form>
      <p>
        Don't have an account?
        <Link style={{ color: "var(--primary)", fontWeight: 700 }} to="/signin">
          Signup here
        </Link>
      </p>
    </div>
  );
};

export default Signin;
