import React from "react";
import { Link } from "react-router-dom";
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

const Button = styled.button`
  color: white;
  background: #0288d1;
  padding: 20px 50px;
  border: none;
  margin-top:100px;
  margin-bottom:50px;
  border-radius: 5px;
  font-size: 18px;
  &:hover {
    background: #03669b;
  }
`;
const Part6 = () => {

  return (
    <div>
      <WrapperPart>
      <LeftSideDiv>
        <p style={{ color: '#78909c', cursor: 'pointer',fontWeight:'bold' ,fontSize: '16px', wordSpacing: '2px' }}>MANAGEMENT</p>
        <p>Scheduling</p>
        <p>Schedule work, assignments, and shifts.</p>
        <p>Time off</p>
        <p>Manage leaves and holidays.</p>
        <p>Approval</p>
        <p>Submit and approve timesheets.</p>
        <p>Invoicing</p>
        <p>Create invoices from billable time.</p>
        <p>Expenses</p>
        <p>Record project expenses and fees.</p>
      </LeftSideDiv>
        <div >
          <img
            src="https://clockify.me/assets/images/feature-team-scheduling.svg"
            alt="statcs pic"
          />
        </div>
      </WrapperPart>
      <Link to='/features'><Button>SEE ALL FEATURES</Button></Link>
    </div>
  );
};
export default Part6;