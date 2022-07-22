import React from "react";
// import "./part4.css";
import styled from "styled-components";
const Part6 = () => {
  const WrapperPart = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90vw;
    height: 75vh;
    margin: auto;
    color: #546e7a;
    overflow: hidden;
  `;
  const LeftList4Heading = styled.p`
    font-weight: bold;
    color: #2e393e;
    cursor: pointer;
  `;

  const LeftSideDiv = styled.div`
    width: 40%;
    p:nth-child(2n + 1) {
      margin-bottom: 3rem;
      text-align: left;
      // line-height: 0.1rem;
      font-size: 13px;
    }
    p:nth-child(2n):hover {
      color: #1181b6;
    }
    p:nth-child(2n) {
      font-weight: bold;
      color: #2e393e;
      cursor: pointer;
      text-align: left;
      line-height: 0px;
    }
  `;

  const Button = styled.button`
    color: white;
    background: #0288d1;
    padding: 20px 50px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    &:hover {
      background: #03669b;
    }
  `;

  return (
    <div>
      <WrapperPart>
        <LeftSideDiv>
          <LeftList4Heading>TIMEKEEPING</LeftList4Heading>
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
        <div id="rightList4">
          <img
            src="https://clockify.me/assets/images/feature-team-activity.svg"
            alt="statcs pic"
            width={"100%"}
          />
        </div>
      </WrapperPart>
      <Button>SEE ALL FEATURES</Button>
    </div>
  );
};
export default Part6;
