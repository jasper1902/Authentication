import About from "./About/About";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import SignUpForm from "./SignUp/SignUpForm";
import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authActions from "./store/authSlice";

export default function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    // localStorage.removeItem("CurrentUser");
    const data = JSON.parse(localStorage.getItem("CurrentUser"));

    if (data === null) {
      console.log("User not found");
      return;
    } else {
      dispatch(authActions.login(data.token));
    }
    // console.log(data);
    // console.log(JSON.parse(data));
    // console.log(typeof JSON.parse(data));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!token && <Route path="/" element={<SignUpForm />} />}
        {token && <Route path="/" element={<Home />} />}
        <Route
          path="/about"
          element={token ? <About /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
