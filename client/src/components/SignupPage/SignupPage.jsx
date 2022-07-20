import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { FaGoogle } from 'react-icons/fa';
import playstore from '../../assets/img/Md_Arshad_Khan/playstore.png'

const SignUpStyling = styled.div`
text-align:center;
margin-top:80px;
background-color:#f2f6f8;
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
  height:460px;
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

`
const SignupPage = () => {
  return (
    <SignUpStyling>
      <p style={{ fontSize: '32px', fontWeight: '500', fontFamily: 'sans-serif',  margin:'10px' , height:'fit-content' }}>Get started with Clockify</p>
      <p style={{ fontSize: '16px', color: 'brown', margin:'0px' }}>Create a free account to start tracking time and supercharge your productivity. </p>
        <p style={{ fontSize: '12px', color: 'grey' }}>No credit card required · Unsubscribe at any time </p>
      <div className='mainSignUpDiv'>
        <div className='SignUpformDiv'>
          <Link to="/" style={{ textDecoration: "none" }}><h3 style={{ fontSize: "18px", color: "black", padding: "30px 0px 0px 30px", textAlign: "left", fontWeight: "600" }}>Sign up</h3></Link>
          <form className='SignUpform'>
            <input type="text" className='SignUpinputAdjust' placeholder='Enter email' />
            <input type="password" className='SignUpinputAdjust' placeholder='Choose Password' />
            <div style={{ display: "flex", alignItems: "center", paddingLeft: '30px', height: '30px' }}>
              <input type="checkbox" style={{ marginRight: '10px' }} />
              <p>I agree to the <a href='https://clockify.me/terms' style={{ color: "#0bacf5", textDecoration: "none" }}>Terms of Use </a></p>
            </div>
            <Link to={'/login'}><input type="submit" className='SignUpSubmitButton' value='CREATE FREE ACCOUNT' /></Link>
            <p style={{ opacity: "1", fontSize: "11px", width: "65%", margin: "auto", marginTop: "0px", marginBottom: "10px" }}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
          </form>
          <hr style={{ width: "80%", opacity: "1", marginTop: "15px" }} />
          <p className="POR">OR</p>
          <div style={{ opacity: "0.98", fontSize: "14px", color: "black", borderRadius: "4px", border: '1px solid #c6c6c6', fontWeight: "700", marginTop: "0px", cursor: "pointer", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", gap: "10px", width: "80%", margin: "auto", height: '40px' }}>
            <img src='https://app.clockify.me/assets/ui-icons/icon-google.svg' alt='' />
            <p >Continue with Google</p>
          </div>
        </div>
        <div className='DontHaveAccountSignUp'>
          <p style={{ fontSize: "14px" }}>Have an account ? <Link to='/login' style={{ fontWeight: "600", color: "#1b74e4", cursor: "pointer" }}>Log in</Link></p>
        </div>
        <br />
        {/* <p style={{ fontSize: "14px", margin: '0px 0px 15px 0px' }}>Get the app</p> */}
        <Link to='/'><img className='playstore' src={playstore} alt='playstore' style={{ cursor: "pointer" }} /></Link>
        <div style={{ display: "flex", alignItems: "center", height: '40px', justifyContent: 'center', fontSize: '12px' }}>
          <img src='https://app.clockify.me/assets/ui-icons/safe.png' alt='' style={{ cursor: "pointer", marginRight: '10px' }} />
          <p>Your data is safe with us: <a href='https://clockify.me/security' style={{ color: "#0bacf5", textDecoration: "none" }}>Security Privacy</a></p>
        </div>
      </div>
    </SignUpStyling>
  )
}

export default SignupPage