import {Routes, Route} from "react-router-dom"
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
function App() {
  return (
    <div className="App" style={{marginTop:"70px", marginBottom:"70px"}}>
      <Routes>
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
