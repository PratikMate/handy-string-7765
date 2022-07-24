import {Routes, Route} from "react-router-dom"
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import FeaturePage from "./components/FeaturePage/FeaturePage";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import HomePage from "./components/HomePage/HomePage";
import MainComponentApp from "./mainComponent/MainComponentApp";
import TimeTracker from "./mainComponent/Time Tracker/TimeTracker";
import { useSelector } from "react-redux";
import Error from './components/Error'

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  console.log('isAuth:', isAuth)

  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/download' element={<DownloadPage />} />
        <Route path='/features' element={<FeaturePage/>} />
        <Route path='/maincomponent/*' element={<MainComponentApp/>} />
        <Route path='/timetracker' element={<TimeTracker/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
