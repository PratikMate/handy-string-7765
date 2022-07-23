import React, { useState } from "react";
// import { DarkmodeButton, Img } from "./Homecss";
import styled from "styled-components";
import { FaSun } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";

const Wrapper = styled.div`
  display:grid;  
   margin:auto;
   justify-content:center;
`;
const Img = styled.img`
  `;
const DarkmodeButton = styled.button`
    width: 40px;
    background-color: #7f9cad;
    height: 25px;
    color: white;
    margin:auto;
    margin-top:10px;
    border-radius: 30px;
    &:hover {
    background-color: #03a9f4;
    color: white;
    .Plinthird {
        color: white;
    }

`;

function Part2() {
  const [show, setshow] = useState(false);

  return (
    <Wrapper>
      <div>
        <Img
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          alt=""
          style={{margin:'auto', marginBottom:'20px', marginTop:'20px'}}
        />

        {show ? (
          <Img
            src="https://clockify.me/assets/images/time-tracker-dark-screenshot.svg"
            alt=""
          />
        ) : (
          <Img
            src="https://clockify.me/assets/images/time-tracker-screenshot.svg"
            alt=""
          />
        )}
      </div>

      <DarkmodeButton
        style={{ textAlign: "center", padding: "2px" }}
        onClick={() => setshow(!show)}
      >
        {!show ? <BsMoonFill /> : <FaSun />}
      </DarkmodeButton>
    </Wrapper>
  )
}

export default Part2;
