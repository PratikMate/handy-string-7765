import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: 80px;
    color: rgb(88, 84, 84);
  `;

  const LeftPartDiv = styled.div`
    //  border: 1px solid black;
    display: flex;
    width: 40%;
    align-items: center;

    > div {
      margin-left: 2.5rem;
      display: flex;
      cursor: pointer;
    }
    > div:hover {
      color: #03a9f4;
    }
  `;
  const RightPartDiv = styled.div`
    width: 40%;
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
    border: 1px solid #03a9f4;
    color: #03a9f4;
    padding: 10px 15px;
    background-color: transparent;
    border-radius: 5px;
    :hover {
      color: white;
      background-color: #03a9f4;
    }
  `;
  return (
    <NavbarWrapper>
      {/* leftpart */}
      <LeftPartDiv>
        <div>
          <img
            style={{ width: "130px" }}
            src="https://www.vectorlogo.zone/logos/clockifyme/clockifyme-ar21.png"
            alt="clockify svg logo"
          />
        </div>
        <div>FEATURES</div>
        <div>DOWNLOAD</div>
      </LeftPartDiv>
      {/* right part */}
      <RightPartDiv>
        <div>LOGIN</div>
        <div>
          {/* <Link to={`/signup`}> */}
          <Button> SIGN UP FREE</Button>
          {/* </Link> */}
        </div>
      </RightPartDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
