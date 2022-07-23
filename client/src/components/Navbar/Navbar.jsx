import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  height:fit-content;
  color: rgb(88, 84, 84);
`;

const LeftPartDiv = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;

  > div {
    display: flex;
    cursor: pointer;
  }
  > div:hover {
    color: #03a9f4;
  }
`;
const RightPartDiv = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: end;
  div {
    margin-left: 2.5rem;
    cursor: pointer;
  }
  div:hover {
    color: #03a9f4;
  }
`;

const Button = styled.button`
  border: 1.5px solid #03a9f4;
  color: #03a9f4;
  padding: 8px 20px;
  background-color: transparent;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #03a9f4;
  }
`;
const Navbar = () => {
  return (
    <NavbarWrapper>
      {/* leftpart */}
      <LeftPartDiv>
        <div>
          <Link to={`/`} style={{ padding: '0px 1.1rem' }}>
            <img
              style={{ width: "150px" }}
              src="https://www.vectorlogo.zone/logos/clockifyme/clockifyme-ar21.png"
              alt="clockify svg logo"
            />
          </Link>
        </div>
        <Link to={`/features`} style={{ padding: '0px 1.1rem' }}><div style={{ fontSize: '14px' }}>FEATURES</div></Link>
        <Link to={`/download`} style={{ padding: '0px 1.1rem' }}><div style={{ fontSize: '14px' }}>DOWNLOAD</div></Link>
      </LeftPartDiv>
      {/* right part */}
      <RightPartDiv>
        <Link to={`/login`}>
          <div style={{ fontSize: '14px' }}>LOG IN</div>
        </Link>
        <div>
          {/* <Link to={`/signup`}>
            <Button style={{ fontSize: '14px' }}> SIGN UP FREE</Button>
          </Link> */}
          <Link to={`/maincomponent`}>
            <Button style={{ fontSize: '14px' }}>GO TO TRACKER</Button>
          </Link>
        </div>
      </RightPartDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
