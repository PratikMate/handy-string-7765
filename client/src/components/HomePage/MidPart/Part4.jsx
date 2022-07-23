import React from "react";
import styled from "styled-components";

const WrapperPart = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  color: #546e7a;
  overflow: hidden;
  margin-top:100px;
`;

const LeftSideDiv = styled.div`
  p:nth-child(2n + 1) {
    margin-bottom: 1.2rem;
    text-align: left;
    font-size: 14px;
  }
  p:nth-child(2n):hover {
    color: #1181b6;
    padding:10px 0px;
  }
  p:nth-child(2n) {
    font-weight: bold;
    color: #2e393e;
    padding:10px 0px;
    cursor: pointer;
    text-align: left;
    line-height: 2px;
    font-size: 16px;
  }
`;
const Part4 = () => {
  return (
    <WrapperPart>
      <LeftSideDiv >
        <p style={{ color: '#78909c', cursor: 'pointer',fontWeight:'bold' ,fontSize: '16px', wordSpacing: '2px' }}>TIMEKEEPING</p>
        <p>Timer</p>
        <p>Track work hours in real time.</p>
        <p>Timesheet</p>
        <p>Enter time in a weekly timesheet.</p>
        <p>Calendar</p>
        <p>Visually block out and manage time.</p>
        <p>Auto tracker</p>
        <p>Track apps and websites you use.</p>
        <p>Kiosk</p>
        <p>Clock in from a shared device.</p>
      </LeftSideDiv>
      <div >
        <img
          src="https://clockify.me/assets/images/feature-time-tracker-methods.svg"
          alt="statcs pic"
        />
      </div>
    </WrapperPart>
  );
};
export default Part4;