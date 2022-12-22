import classes from "./SignUp.module.css";
import btnClass from "../Navbar/Navbar.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import authActions from "../store/authSlice";
import ReactFileReader from "react-file-reader";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [img, setImg] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      username.current.value === "" ||
      email.current.value === "" ||
      password.current.value === ""
    ) {
      console.log("Fill all details");
      return;
    }

    const userObj = {
      Username: username.current.value,
      Email: email.current.value,
      Password: password.current.value,
      token: "inoinfasidibnansodin",
      profile: img
    };
    dispatch(authActions.SignUp(userObj));
  };

  const handleFiles = (file) => {
    // console.log(file.base64);
    setImg(file.base64);
  };

  return (
    <div className={`${classes.signUp}`}>
      <h1>Register Now!!</h1>
      <form onSubmit={handleSignUp}>
        <input ref={username} placeholder="Name" />
        <input ref={email} placeholder="Email" />
        <input ref={password} placeholder="Password" />
        <ReactFileReader handleFiles={handleFiles} base64={true}>
          Upload Profile:
          <button type="button" className={`${btnClass.btnSm}`}>
            Upload
          </button>
        </ReactFileReader>
        <button type="submit" className={`${btnClass.btnSm}`}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
