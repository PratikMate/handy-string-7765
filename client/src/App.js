import {Routes, Route} from "react-router-dom"
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Navbar from "./mainComponent/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/download' element={<DownloadPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
