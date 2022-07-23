import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import styled from "styled-components";

const Part1 = () => {
  const Wrapper = styled.div`
    width: 60vw;
    margin: 2rem auto;
    color: #546e7a;
  `;

  const SiteDetailDiv = styled.div`
    // border: 1px solid rgb(157, 0, 255);
    text-align: center;
    width: 65%;
    margin: 0 auto;
    font-weight: bold;
  `;
  const RatingStarDiv = styled.div`
    font-size: 12px;
    display: flex;
    color: rgb(206, 206, 37);
  `;

  const RatingStarSpan = styled.span`
    font-size: 12px;
    color: #546e7a;
    margin: 0 5px;
  `;
  const Button = styled.button`
    background: #0288d1;
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    border: #0288d1;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer;
    :hover {
      background: #046997;
    }
  `;
  const UserNoSpan = styled.span`
    font-size: 12px;
    margin: 0px 5px;
    cursor: pointer;
  `;
  const UserNoDiv = styled.div`
    margin-top: 10px;
    // border: 5px solid red;
    justify-content: center;
    display: flex;
    align-items: center;
    color: #0288d1;
  `;
  return (
    <Wrapper>
      <div>
        <h1 id="headingMain" style={{ wordSpacing: "0.5rem" }}>
          The most popular free
          <span
            style={{
              color: "#03A9F4",
              wordSpacing: ".5rem",
              margin: "0 1rem",
            }}
          >
            time tracker
          </span>
          for teams
        </h1>
      </div>
      <SiteDetailDiv>
        <p>
          Time tracking software used by millions. Clockify is a time tracker
          and timesheet app that lets you track work hours across projects.
          Unlimited users, free forever.
        </p>
      </SiteDetailDiv>
      {/* rating Star */}
      <RatingStarDiv>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <BsStarHalf />
        <RatingStarSpan>(4.7) 4,100+ Reviews</RatingStarSpan>
      </RatingStarDiv>
      {/* butto */}
      <div id="button">
        <Button>START TRACKING TIME - IT'S FREE </Button>
      </div>
      <UserNoDiv>
        <FaUsers />
        <UserNoSpan>126,274 people signed up last month</UserNoSpan>
      </UserNoDiv>
    </Wrapper>
  );
};

export default Part1;
