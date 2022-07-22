import React from "react";
import styled from "styled-components";

const Part4 = () => {
  const WrapperPart = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90vw;
    height: 75vh;
    margin: auto;
    color: #546e7a;

    // border: 1px solid red;
    overflow: hidden;
  `;
  const LeftList4Heading = styled.p`
    font-weight: bold;
    color: #2e393e;
    cursor: pointer;
  `;
  const LeftSideDiv = styled.div`
    p:nth-child(2n + 1) {
      // border: 1px solid red;
      margin-bottom: 3rem;
      text-align: left;
      line-height: 2px;
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
      line-height: 2px;
    }
  `;
  return (
    <WrapperPart>
      <LeftSideDiv id="leftList4">
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
          src="https://clockify.me/assets/images/feature-time-tracker.svg"
          alt="statcs pic"
          width={"100%"}
        />
      </div>
    </WrapperPart>
  );
};

export default Part4;
