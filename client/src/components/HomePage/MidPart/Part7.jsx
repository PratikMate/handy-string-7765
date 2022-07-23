import React from "react";
import styled from "styled-components";

const HomePagePage7Styling = styled.div`
background: #f7fcff;
padding:100px;
.IndividualButtonsCSS{
  display:flex;
  gap:10px;
  justify-content:center;
}
.buttonCSSforIndividuals{
  border:1px solid #03a9f4;
  width:120px;
  padding:6px;
  border-radius:5px;
  color:#03a9f4;
  cursor:pointer;
  background: #f7fcff;
}
.buttonCSSforIndividuals:hover{
  background:#03a9f4;
  color:white;
}
`

const Part7 = () => {
  return (
    <HomePagePage7Styling>
      <div>
        <p style={{fontSize:'34px', fontWeight:'450' }}>Time tracking apps</p>
        <p style={{fontSize:'21px', fontWeight:'450', color:'#5a6b7b', width:'50%',margin:'auto', marginTop:'10px', marginBottom:'50px' }}>
          Clockify works across devices. Track time from anywhere — all data is
          synced online.
        </p>
      </div>

      <div style={{display:'flex', justifyContent:'center', gap:'50px'}}>
        <div>
          <img src="https://clockify.me/assets/images/time-tracking-app-desktop.png" alt="timeTrackingApp" />
          <p style={{fontWeight:'500', fontSize:'14px', padding:'10px'}}>DESKTOP APP</p>
          <div className="IndividualButtonsCSS">
            <div className="buttonCSSforIndividuals">
              <p>Windows</p>
            </div>
            <div className="buttonCSSforIndividuals">
              <p>Mac</p>
            </div>
            <div className="buttonCSSforIndividuals">
              <p>Linux</p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://clockify.me/assets/images/time-tracking-app-web.png" alt="timeTrackingApp" />
          <p style={{fontWeight:'500', fontSize:'14px', padding:'10px'}}>WEB APP</p>
          <div className="IndividualButtonsCSS">
            <div className="buttonCSSforIndividuals">
              <p>Edge</p>
            </div>
            <div className="buttonCSSforIndividuals">
              <p>Chrome</p>
            </div>
            <div className="buttonCSSforIndividuals">
              <p>Firefox</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', gap:'50px', marginTop:'100px'}}>
        <div>
          <img src="https://clockify.me/assets/images/time-tracking-app-mobile.png" alt="timeTrackingApp" />
          <p style={{fontWeight:'500', fontSize:'14px', padding:'10px'}}>MOBILE APP</p>
          <div className="IndividualButtonsCSS">
            <div className="buttonCSSforIndividuals">
              <p>Android</p>
            </div>
            <div className="buttonCSSforIndividuals">
              <p>iOS</p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://clockify.me/assets/images/time-tracking-app-kiosk.png" alt="timeTrackingApp" />
          <p style={{fontWeight:'500', fontSize:'14px', padding:'10px'}}>KIOSK APP</p>
          <div className="IndividualButtonsCSS">
            <div className="buttonCSSforIndividuals">
              <p>Any Device</p>
            </div>
          </div>
        </div>
      </div>
    </HomePagePage7Styling>
  );
};

export default Part7;
