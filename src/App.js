import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="homepage" />
        <Route element={<Login />} path="loginpage" />
        <Route element={<Register />} path="registerpage" />
        <Route element={<NotFound />} path="404" />

        <Route element={<Navigate to="/homepage" />} path="/" />
        <Route element={<Navigate to="/404" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
