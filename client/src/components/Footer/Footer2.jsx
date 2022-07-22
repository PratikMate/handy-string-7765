import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";

const Footer2 = () => {
  const SpanElem = styled.span`
    width: 200px;
    font-size: 24px;
    padding: 0 8px;
    // border: 3px solid red;
    :hover {
      cursor: pointer;
      color: #03a9f4;
    }
  `;

  const P = styled.p`
    font-size: 12px;
    :hover {
      cursor: pointer;
      color: #03a9f4;
    }
  `;
  const Span = styled.span`
    margin: 0 7px;
    // border: 1px solid black;
    font: 14px;
    :hover {
      cursor: pointer;
      color: #03a9f4;
    }
  `;
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
        <div>
          <SpanElem>
            <AiFillFacebook />
          </SpanElem>
          <SpanElem>
            <AiFillYoutube />
          </SpanElem>
          <SpanElem>
            <AiFillLinkedin />
          </SpanElem>
          <SpanElem>
            <AiFillInstagram />
          </SpanElem>
          <SpanElem>
            <AiFillTwitterCircle />
          </SpanElem>
        </div>
        <P> +1-855-738-8741</P>
        <P style={{ fontSize: "10px" }}>ESPAÑOL</P>
      </div>
    </div>
  );
};

export default Footer2;
