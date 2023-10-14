import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import UserActivationPage from "./pages/UserActivationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/activate/:activation_token"
          element={<UserActivationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
