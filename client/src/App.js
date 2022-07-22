import {Routes, Route} from "react-router-dom"
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import FeaturePage from "./components/FeaturePage/FeaturePage";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Navbar from "./mainComponent/Navbar";
import HomePage from "./components/HomePage/HomePage";
import MainComponentApp from "./mainComponent/MainComponentApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/download' element={<DownloadPage />} />
        <Route path='/features' element={<FeaturePage/>} />
        <Route path='/maincomponent' element={<MainComponentApp/>} />
      </Routes>
    </div>
  );
}

export default App;
