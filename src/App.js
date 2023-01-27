import "./App.css";
import Home from "./components/Home";
import User from "./components/User";
import { useEffect } from "react";
import { fetchalluser } from "./api/services/AllUser";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchalluser());
  }, []);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userid" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
