import React, { useState } from "react";
// import { DarkmodeButton, Img } from "./Homecss";
import styled from "styled-components";
import { FaSun } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";

function Part2() {
  const [show, setshow] = useState(false);
  const Img = styled.img`
    width: 80vw;
    // height: 80vh;
  `;
  const DarkmodeButton = styled.button`
    width: 7%;
    border: 1px solid white ;
    background-color: #7f9cad;
    height: 30px;
    color: white;
    border-radius: 30px;
    &:hover {
    background-color: #03a9f4;
    color: white;
    .Plinthird {
        color: white;
    }

`;
  const Wrapper = styled.div``;

  return (
    <Wrapper>
      <div>
        <Img
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          alt=""
          widh
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
  );
}

export default Part2;
