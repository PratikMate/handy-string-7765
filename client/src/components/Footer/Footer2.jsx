import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";

const SpanElem = styled.span`
  width: fit-content;
  font-size: 20px;
  padding: 0 4px;
  :hover {
    cursor: pointer;
    color: #03a9f4;
  }
`;

const P = styled.p`
  font-size: 12px;
  padding:15px 0px 0px 10px;
  :hover {
    cursor: pointer;
    color: #03a9f4;
  }
`;
const Span = styled.span`
  margin: 0 7px;
  font-size: 14px;
  :hover {
    cursor: pointer;
    color: #03a9f4;
  }
`;
const Footer2 = () => {
  return (
    <div
      id="footer2"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        color: "#7f9cad",
        textAlign: "end",
        lineHeight: "1.1rem",
        width: '72%',
        margin: 'auto',
        marginBottom: '40px',
        paddingTop: '40px'

      }}
    >
      <div id="leftPartFooter2" style={{ textAlign: "start" }}>
        <div id="firstDiv">
          <Span>© 2022 Clockify</Span>
          <Span>Cookies</Span>
          <Span>Terms</Span>
          <Span>Privacy</Span>
          <Span>Security</Span>
        </div>
        <div id="secondDiv">
          <P>COING Inc, 2100 Geng Road, Suite 210, Palo Alto, CA 94303, USA</P>
        </div>
        <div id="thirdDiv">
          <P>SITEMAP</P>
        </div>
      </div>

      {/* rightPart */}
      <div id="rightPartFooter2">
        <div style={{ display: 'flex' }}>
          <SpanElem>
            <a href="https://www.linkedin.com/in/md-arshad-khan-350206154/"><AiFillLinkedin /></a>
          </SpanElem>
          <SpanElem>
            <a href="https://www.instagram.com/_mad___boxer_/"><AiFillInstagram /></a>
          </SpanElem>
          <SpanElem>
            <a href="https://www.facebook.com/people/Arshad-Khan/100004164048208/"><AiFillFacebook /></a>
          </SpanElem>
          <SpanElem>
            <a href="https://www.youtube.com/channel/UCGK-satop1PZ9njUOYCzHJw"><AiFillYoutube /></a>
          </SpanElem>
          <SpanElem>
            <AiFillTwitterCircle />
          </SpanElem>
        </div>
        <P> +91-8431290899</P>
        <P style={{ fontSize: "10px" }}>ESPAÑOL</P>
      </div>
    </div>
  );
};

export default Footer2;
