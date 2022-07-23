import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import styled from "styled-components";
import {Heading} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 60vw;
  margin: 2rem auto;
  color: #546e7a;
`;
const SiteDetailDiv = styled.div`
  text-align: center;
  width: 68%;
  margin: 0 auto;
  font-weight: bold;
`;
const RatingStarDiv = styled.div`
  display:flex;
  font-size: 17px;
  justify-content:center;
  margin:15px;
  word-spacing:2px;
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
  font-size: 13px;
  margin: 0px 5px;
  cursor: pointer;
`;
const UserNoDiv = styled.div`
  margin-top: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #0288d1;
`;
const Part1 = () => {
  return (
    <Wrapper>
      <div>
        <p style={{ wordSpacing: "0.5rem",marginTop:'50px', fontSize:'40px', fontWeight:'400', color:'black'}}>
          The most popular free
          <span
            style={{
              color: "#03A9F4",
              wordSpacing: ".5rem",
              margin: "0 1rem",
              fontWeight:'400'
            }}
          >
            time tracker
          </span>
          for teams
        </p>
      </div>
      <SiteDetailDiv>
        <p style={{ fontSize:'20px', fontWeight:'400'}}>
          Time tracking software used by millions. Clockify is a time tracker
          and timesheet app that lets you track work hours across projects.
          Unlimited users, free forever.
        </p>
      </SiteDetailDiv>
      {/* rating Star */}
      <RatingStarDiv>
        <AiFillStar style={{color:'gold'}}/>
        <AiFillStar  style={{color:'gold'}} />
        <AiFillStar  style={{color:'gold'}} />
        <AiFillStar  style={{color:'gold'}} />
        <BsStarHalf  style={{color:'gold'}}/>
        <RatingStarSpan>(4.7) 4,100+ Reviews</RatingStarSpan>
      </RatingStarDiv>
      {/* butto */}
      <div>
        <Link to='maincomponent'><Button>START TRACKING TIME - IT'S FREE </Button></Link>
      </div>
      <UserNoDiv>
        <FaUsers />
        <UserNoSpan>126,274 people signed up last month</UserNoSpan>
      </UserNoDiv>
    </Wrapper>
  );
};

export default Part1;
