import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { FaGoogle } from 'react-icons/fa';
import playstore from '../../assets/img/Md_Arshad_Khan/playstore.png'
import login from  '../../assets/img/Md_Arshad_Khan/login.png';

const SignUpStyling = styled.div`
text-align:center;
margin-top:80px;
background-color:#f2f6f8;
display:flex;
.mainSignUpDiv{
  width:370px;
  margin:auto;
  margin-top:10px;
}
.SignUpformDiv{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius:5px;
  background-color:white;
  widht:100%;
  height:405px;
}
.SignUpform{
  widht:100%;
  height:fit-content;
  margin-top:20px;
  display:grid;
  gap:15px;
}
.SignUpinputAdjust{
  height:25px;
  width:77%;
  margin:auto;
  border-radius:2px;
  background-color:#f8f8f8;
  border:none;
  border:0.1px solid #cacaca;
  font-size:13px;
  padding:9px;
}
.SignUpSubmitButton{
  height:37px;
  width:80%;
  margin:auto;
  border-radius:2px;
  background-color:#0bacf5;
  border:none;
  color:white;
  font-size:13px;
  font-weight:500;
  padding:0px 10px;
  cursor:pointer;
}
.SignUpSubmitButton:hover{
  background-color:#44b6e8;
}
.POR{
  font-size:"18px";
  font-weight:600;
  opacity:0.7;
  position:relative;
  margin-top:-22px;
  background:white;
}
.DontHaveAccountSignUp{
  margin-top:20px;
  background-color:white;
  padding: 2px 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.playstore{
  width:75%;
}
.loginSideImage{
  position:relative;
  z-index:20;
  ${'' /* border: 1px solid red; */}
  height:100vh;
  width:35vw;
}

`
const LoginPage = () => {
  return (
    <SignUpStyling>
      <div className='mainSignUpDiv'>
        <div className='SignUpformDiv'>
          <Link to="/" style={{ textDecoration: "none" }}><h3 style={{ fontSize: "18px", color: "black", padding: "30px 0px 0px 30px", textAlign: "left", fontWeight: "600" }}>Log In</h3></Link>
          <form className='SignUpform'>
            <input type="text" className='SignUpinputAdjust' placeholder='Enter email' />
            <input type="password" className='SignUpinputAdjust' placeholder='Enter Password' />
            <div style={{ display: "flex", justifyContent:'space-between', alignItems: "center", padding: '0px 40px 0px 30px', height: '30px' }}>
              
              <p><input type="checkbox" style={{ marginRight: '10px' }} />Stay logged in</p>
              <p><a href='https://clockify.me/terms' style={{ color: "#0bacf5", textDecoration: "none" }}>Forgot password? </a></p>
            </div>
            <Link to={'/'}><input type="submit" className='SignUpSubmitButton' value='LOG IN' /></Link>
          </form>
          <hr style={{ width: "80%", opacity: "1", marginTop: "15px" }} />
          <p className="POR">OR</p>
          <div style={{ opacity: "0.98", fontSize: "14px", color: "black", borderRadius: "4px", border: '1px solid #c6c6c6', fontWeight: "700", marginTop: "0px", cursor: "pointer", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: "10px", width: "80%", margin: "auto", height: '40px' }}>
            <img src='https://app.clockify.me/assets/ui-icons/icon-google.svg' alt='' />
            <p >Continue with Google</p>
          </div>
        </div>
        <div className='DontHaveAccountSignUp'>
          <p style={{ fontSize: "14px" }}>Don't Have an account ? <Link to='/signup' style={{ fontWeight: "600", color: "#1b74e4", cursor: "pointer" }}>Sign Up</Link></p>
        </div>
        <br />
        {/* <p style={{ fontSize: "14px", margin: '0px 0px 15px 0px' }}>Get the app</p> */}
        <Link to='/'><img className='playstore' src={playstore} alt='playstore' style={{ cursor: "pointer" }} /></Link>
        <div style={{ display: "flex", alignItems: "center", height: '40px', justifyContent: 'center', fontSize: '12px' }}>
          <img src='https://app.clockify.me/assets/ui-icons/safe.png' alt='' style={{ cursor: "pointer", marginRight: '10px' }} />
          <p>Your data is safe with us: <a href='https://clockify.me/security' style={{ color: "#0bacf5", textDecoration: "none" }}>Security Privacy</a></p>
        </div>
      </div>
      <div className="loginSideImage" >
        <img src={login} height='100%' width='100%' alt='loginSideImage'/>
      </div>
    </SignUpStyling>
  )
}

export default LoginPage