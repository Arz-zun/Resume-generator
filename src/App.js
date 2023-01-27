import './App.css';
import Home from './components/Home';
import { useEffect } from "react";
import { fetchalluser } from "./api/services/AllUser";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchalluser());
  }, []);
  return (
<div className=''>
  <Home/>
</div>
  );
}

export default App;
