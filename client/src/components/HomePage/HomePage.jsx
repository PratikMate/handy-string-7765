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
import Part7Sub from "./MidPart/Part7Sub";

const HomePage = () => {
  const HomePageWrapper = styled.div`
    margin:auto;
    justify-content:center;
  `;
  return (
    <HomePageWrapper>
      <Navbar />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part7Sub/>
      <Part8 />
      <Part9 />
      <Footer />
      <Footer2 />
    </HomePageWrapper>
  );
};

export default HomePage;
