import { Fragment } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import CreateChallenge from './Pages/CreateChallenge';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreateChallenge/>}></Route>
      </Routes>
      
    </Fragment>
  );
}

export default App;
