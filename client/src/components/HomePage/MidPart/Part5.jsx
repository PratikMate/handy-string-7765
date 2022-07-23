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
margin-top:50px;
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
const Part5 = () => {
  return (
    <WrapperPart>
      <div>
        <img
          src="https://clockify.me/assets/images/feature-time-report.svg"
          alt="statcs pic"
        />
      </div>
      <LeftSideDiv>
        <p style={{ color: '#78909c', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', wordSpacing: '2px' }}>REPORTING</p>
        <p>Reports</p>
        <p>Analyze and export tracked time.</p>
        <p>Activity</p>
        <p>See who works on what.</p>
        <p>Rates</p>
        <p>See earnings, cost, and profit.</p>
        <p>Progress</p>
        <p>Track project estimates and budget.</p>
        <p>Location</p>
        <p>See visited sites and routes.</p>
      </LeftSideDiv>
    </WrapperPart>
  );
};
export default Part5;