import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authActions from "../store/authSlice";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  // const userData = useSelector((state) => state.auth.UsersData);
  const userData = JSON.parse(localStorage.getItem("authData"));
  const dispatch = useDispatch();
  const username = useRef();
  const password = useRef();
  let img = "";
  if (token) {
    const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    img = CurrentUser.profile;
    console.log("Profile", CurrentUser);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let user = userData.find((user) => {
      return user.Username === username.current.value;
    });

    console.log(user);
    if (user) {
      if (user.Password === password.current.value) {
        localStorage.setItem(
          "CurrentUser",
          JSON.stringify({ ...user, Password: "" })
        );
        dispatch(authActions.login(user.token));
      } else {
        console.log("Invalid Credentials");
      }
    } else {
      console.log("User not found");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("CurrentUser");
    dispatch(authActions.logout());
  };

  return (
    <>
      <nav className={`${classes.navbar}`}>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className={`${classes.right}`}>
          {token && (
            <>
              <img className={`${classes.profile}`} src={img} alt="Profile" />
              <button onClick={handleLogout} className={`${classes.btnSm}`}>
                Logout
              </button>
            </>
          )}
          {!token && (
            <form onSubmit={handleLogin}>
              <input ref={username} placeholder="Username" />
              <input ref={password} placeholder="Password" />
              <button type="submit" className={`${classes.btnSm}`}>
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
