import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterWrapper = styled.div`
    // border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    color: rgb(88, 84, 84);
    line-height: 2rem;
  `;
  const RightDiv = styled.div`
    width: 60%;
    /* border: 1px solid rgb(34, 0, 255); */
    display: flex;
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
    :hover {
      color: rgb(88, 84, 84) !important ;
    }
  `;
  const OptionRight = styled.div`
    div:hover {
    color: #03a9f4;
    cursor: pointer;
  `;
  return (
    <FooterWrapper id="footer">
      <LeftDiv id="left">
        <div className="optionRight">
          <img
            width="150px"
            height="50px"
            src="https://www.vectorlogo.zone/logos/clockifyme/clockifyme-ar21.png"
            alt="logo"
          />
        </div>
        <p>The world's leading time tracker and timesheet software for teams</p>
        <div>SIGN UP FREE</div>
        <div>LOG IN</div>
      </LeftDiv>
      <RightDiv id="right">
        {/* PRODUCT */}
        <OptionRight className="optionRight">
          <RightPHeading className="headingRight">
            <b>PRODUCT</b>
          </RightPHeading>
          <div>Features</div>
          <div>Download</div>
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
