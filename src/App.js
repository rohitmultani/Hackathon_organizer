import { Fragment } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import CreateChallenge from './Pages/CreateChallenge';
import ViewDescription from './Pages/ViewDescription';
import store from './Utils/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Fragment>
       <Provider store={store}>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreateChallenge/>}></Route>
        <Route path="/:id" element={<ViewDescription />} />
      </Routes>
      
      </Provider>
    </Fragment>
  );
}

export default App;
