import React from "react";
import styled from "styled-components";

import { FaUsers } from "react-icons/fa";

const Part9 = () => {
  const Wrapper = styled.div`
    width: 60vw;
    margin: 2rem auto;
    color: #546e7a;
  `;
  const Ul = styled.ul`
    display: flex;
    width: 30vw;
    margin: auto;
    justify-content: space-around;
    text-align: center;
  `;
  const Button = styled.button`
    background: #0288d1;
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    border: #0288d1;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;

    :hover {
      background: #046997;
    }
  `;
  const UserNoSpan = styled.span`
    font-size: 12px;
    margin: 0px 5px;
    cursor: pointer;
  `;
  const UserNoDiv = styled.div`
    margin-top: 10px;
    // border: 5px solid red;
    justify-content: center;
    display: flex;
    align-items: center;
    color: #0288d1;
  `;
  return (
    <Wrapper>
      <h2>Start tracking time with Clockify</h2>
      <Ul>
        <li>24/7 Support</li>
        <li>Cancel Anytime</li>
        <li>Free Forever</li>
      </Ul>
      <br />
      <br />
      <div>
        <Button>CREATE FREE ACCOUNT</Button>
      </div>
      <UserNoDiv>
        <FaUsers />
        <UserNoSpan>126,274 people signed up last month</UserNoSpan>
      </UserNoDiv>
    </Wrapper>
  );
};

export default Part9;
