import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer/Footer2";
import Part1 from "./MidPart/Part1";
import Part2 from "./MidPart/Part2";
import Part3 from "./MidPart/Part3";
import Part4 from "./MidPart/Part4";
import Part5 from "./MidPart/Part5";
import Part6 from "./MidPart/Part6";
import Part7 from "./MidPart/Part7";
import Part8 from "./MidPart/Part8";
import Part9 from "./MidPart/Part9";
import styled from "styled-components";

const HomePage = () => {
  const HomePageWrapper = styled.div`
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
    // border: 1px solid red;
  `;
  return (
    <HomePageWrapper id="xx">
      <Navbar />
      <br />
      <br />
      <Part1 />
      <br />
      <br />
      <Part2 />
      <br />
      <br />
      <Part3 />
      <br />
      <br />
      <Part4 />
      <br />
      <br />
      <Part5 />
      <br />
      <br />
      <Part6 />
      <br />
      <br />
      <Part7 />
      <br />
      <br />
      <Part8 />
      <br />
      <br />
      <Part9 />
      <br />
      <br />
      <Footer />
      <br />
      <br />
      <Footer2 />
    </HomePageWrapper>
  );
};

export default HomePage;
