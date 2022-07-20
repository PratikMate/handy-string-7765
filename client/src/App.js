import {Routes, Route} from "react-router-dom"
import './App.css';
import DownloadPage from './components/DownloadPage/DownloadPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        
      </Routes>
      <DownloadPage />
    </div>
  );
}

export default App;
