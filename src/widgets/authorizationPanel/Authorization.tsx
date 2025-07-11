import { useState } from "react";
import styles from "./authorization.module.scss";
import { Link } from "react-router-dom";

interface NewUserData {
  email: string;
  password: string;
  login: string;
}

interface UserLoginData {
  email: string;
  password: string;
}

function Authorization() {
  const [regLogPanel, setRegLogPanel] = useState(true);

  const [newUserData, setNewUserData] = useState<NewUserData>({
    email: "",
    password: "",
    login: "",
  });

  const [loginData, setLoginData] = useState<UserLoginData>({
    email: "",
    password: "",
  });

  function handleRegistration(e: React.FormEvent) {
    e.preventDefault();
    console.log("Sending data for registration", newUserData);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log("Sending data for login", loginData);
  }

  return (
    <>
      {regLogPanel ? (
        <div className={styles.authorization}>
          <form onSubmit={handleRegistration} className={styles.form}>
            <h1 className={`${styles.text} nunito-primary`}>
              You are new here, right?
            </h1>
            <input
              type="email"
              placeholder="Email"
              value={newUserData.email}
              onChange={(e) =>
                setNewUserData({ ...newUserData, email: e.target.value })
              }
              required
              className={`${styles.input} nunito-primary`}
            />
            <input
              type="password"
              placeholder="Password"
              value={newUserData.password}
              onChange={(e) =>
                setNewUserData({ ...newUserData, password: e.target.value })
              }
              required
              className={`${styles.input} nunito-primary`}
            />
            <input
              type="text"
              placeholder="Login"
              value={newUserData.login}
              onChange={(e) =>
                setNewUserData({ ...newUserData, login: e.target.value })
              }
              required
              className={`${styles.input} nunito-primary`}
            />
            <button type="submit" className={`nunito-primary`}>
              Create
            </button>
          </form>
          <div className={styles.options}>
            <Link to={"/"} className={styles.back}>
                Back
            </Link>
            <button onClick={() => setRegLogPanel(false)} className={styles.changeModeButn}>Login</button>
          </div>
        </div>
      ) : (
        <div className={styles.authorization}>
          <form onSubmit={handleLogin} className={styles.form}>
            <h1 className={`${styles.text} nunito-primary`}>
              How it's going on?
            </h1>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
              className={`${styles.input} nunito-primary`}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
              className={`${styles.input} nunito-primary`}
            />
            <button type="submit" className={`nunito-primary`}>
              Welcome!
            </button>
          </form>
          <div className={styles.options}>
            <Link to={"/"} className={styles.back}>
                Back
            </Link>
            <button onClick={() => setRegLogPanel(true)} className={styles.changeModeButn}>Register</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Authorization;
