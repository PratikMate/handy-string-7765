import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.actions";

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
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

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
        {!isAuth ? (<Link to={`/login`}>
          <div style={{ fontSize: '14px' }}>LOG IN</div>
        </Link>) :
          <div style={{ fontSize: '14px' }} onClick={() => dispatch(logout())}>LOG OUT</div>
        }
        <div>
         
          <Link to={isAuth ? `/maincomponent` : `/signup`}>
            <Button style={{ fontSize: '14px' }}>{isAuth ? "GO TO TRACKER":"SIGN UP FREE"}</Button>
          </Link>
        </div>
      </RightPartDiv>
    </NavbarWrapper>
  );
};

export default Navbar;
