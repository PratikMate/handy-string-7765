import {Routes, Route} from "react-router-dom"
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import FeaturePage from "./components/FeaturePage/FeaturePage";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Navbar from "./mainComponent/Navbar";
import TimeTracker from "./mainComponent/Time Tracker/TimeTracker";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <TimeTracker/>
      <Routes>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/download' element={<DownloadPage />} />
        <Route path='/features' element={<FeaturePage/>} />
      </Routes>
    </div>
  );
}

export default App;
