import { useState } from "react";
import styles from "../Sign.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    isSeller: false,
  });

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("/auth/signup", user);
  };

  return (
    <div className={styles.sign}>
      <h2>Signup</h2>
      <form onSubmit={formSubmitHandler}>
        <input
          onChange={(e) => {
            setUser((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="username"
          type="text"
          placeholder="username*"
        />
        <input
          onChange={(e) => {
            setUser((prevUser) => {
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
            setUser((prevUser) => {
              return { ...prevUser, [e.target.name]: e.target.value };
            });
          }}
          className={styles.input}
          required
          name="password"
          type="password"
          placeholder="password*"
        />
        {user.isSeller && (
          <input
            type="text"
            name="location"
            onChange={(e) => {
              setUser((prevUser) => {
                return { ...prevUser, [e.target.name]: e.target.value };
              });
            }}
            className={styles.input}
            placeholder="company location*"
            required
          />
        )}
        <button className={`${styles.btn} ${styles.submitBtn}`} type="submit">
          Submit
        </button>
      </form>
      {!user.isSeller && (
        <button
          style={{
            color: `var(--main-text-color)`,
          }}
          onClick={() => {
            setUser((prev) => {
              return { ...prev, isSeller: true };
            });
          }}
          className={`${styles.btn} ${styles.sellerBtn}`}
        >
          I want to be a Seller
        </button>
      )}
      <p>
        Already have an account?
        <Link style={{ color: "var(--primary)", fontWeight: 500 }} to="/signin">
          Signin here
        </Link>
      </p>
    </div>
  );
};

export default Signup;
