import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../../pages/Login";
import SignupForm from "../../pages/Signup";
import Home from "../../pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<LoginForm/>} />
        <Route path="/register" element={<SignupForm/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};

export default Router;
