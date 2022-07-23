import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 72%;
    margin:auto;
    color: rgb(88, 84, 84);
    line-height: 2rem;
  `;
const RightDiv = styled.div`
    width: 60%;
    display: flex;
    margin-top:30px;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
  `;
const LeftDiv = styled.div`
    width: 20%;
    text-align: left;
    line-height: 1.3rem;
    div:hover {
      color: #03a9f4;
      cursor: pointer;
    }
    p:hover {
      color: #03a9f4;
      cursor: pointer;
    }
  `;

const RightPHeading = styled.p`
    font-size: 14px;
    line-height: 1rem;
    margin-bottom:10px;
    :hover {
      color: rgb(88, 84, 84) !important ;
    }
  `;
const OptionRight = styled.div`
    div:hover {
    color: #03a9f4;
    cursor: pointer;
  `;

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LeftDiv id="left">
        <div className="optionRight">
          <Link to='/'><img
            width="150px"
            height="50px"
            src="https://www.vectorlogo.zone/logos/clockifyme/clockifyme-ar21.png"
            alt="logo"
          /></Link>
        </div>
        <p style={{fontSize:'12px', paddingLeft:'10px', color:'#78909c'}}>The world's leading time tracker and timesheet software for teams</p>
        <Link to='/signup'><p style={{fontSize:'14px', padding:'15px 0px 0px 10px', color:'grey'}}>SIGN UP FREE</p></Link>
        <Link to='/login'><p style={{fontSize:'14px', padding:'15px 0px 0px 10px', color:'grey'}}>LOG IN</p></Link>
      </LeftDiv>
      <RightDiv id="right">
        {/* PRODUCT */}
        <OptionRight className="optionRight">
          <RightPHeading className="headingRight">
            <b>PRODUCT</b>
          </RightPHeading>
          <Link to='/features' style={{textDecoration:'none'}}><div>Features</div></Link>
          <Link to='/download' style={{textDecoration:'none'}}><div>Download</div></Link>
          <div>Integrations</div>
          <div>Upgrade</div>
        </OptionRight>
        {/* SOLUTION */}
        <OptionRight className="optionRight">
          <RightPHeading className="headingRight">
            <b>SOLUTION</b>
          </RightPHeading>
          <div>Time clock</div>
          <div>Timecard calculator</div>
          <div>Timesheet</div>
          <div>Reporting</div>
          <div>Scheduling</div>
        </OptionRight>
        {/* COMPANY */}
        <OptionRight className="optionRight">
          <RightPHeading className="headingRight">
            <b>COMPANY</b>
          </RightPHeading>
          <div>About us</div>
          <div>Customers</div>
          <div>Resources</div>
          <div>Blog</div>
          <div>API</div>
        </OptionRight>
        {/* SUPPORT */}
        <OptionRight className="optionRight">
          <RightPHeading className="headingRight">
            <b>SUPPORT</b>
          </RightPHeading>
          <div>Help</div>
          <div>Tutorials</div>
          <div>Forum</div>
          <div>Contact</div>
        </OptionRight>
      </RightDiv>
    </FooterWrapper>
  );
};

export default Footer;
