import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import reviwewData from "./reviewData";

const Card = styled.p`
  padding:40px 1rem;
  cursor:pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &:hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`;

const WrapperCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  text-align: left;
  flex-wrap: auto;
  padding:30px 0px;
  color: rgb(88, 84, 84);
  & 
`;
const Part8 = () => {

  return (
    <div>
      <div style={{ padding: '100px 0px 50px 0px' }}>
        <p style={{ fontSize: '12px', color: '#78909c' }}>#1 RATED SOFTWARE</p>
        <p style={{ fontSize: '34px', color: 'black' }}>Join millions of happy users</p>
        <p style={{ fontSize: '21px', color: '#5a6b7b' }}>Clockify is the best rated time tracking software with 4,100+ reviews.</p>
      </div>

      <img
        src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg"
        height={"80px"}
        alt=""
      />

      <WrapperCard>
        {reviwewData.map((el, index) => (
          <Card key={index}>
            <p style={{ fontWeight: "bold", fontSize: "14px" }}>
              {el.title}
            </p>
            <div style={{ color: "rgb(228, 228, 49)", padding: '10px 0px', display: 'flex' }}>
              <AiFillStar style={{ color: 'gold', fontSize: '12px' }} />
              <AiFillStar style={{ color: 'gold', fontSize: '12px' }} />
              <AiFillStar style={{ color: 'gold', fontSize: '12px' }} />
              <AiFillStar style={{ color: 'gold', fontSize: '12px' }} />
              <AiFillStar style={{ color: 'gold', fontSize: '12px' }} />
            </div>
            <p style={{ fontSize: "12px" }}>
              {el.disc}
            </p>
            <p style={{ fontSize: "10px" }}> {el.author}</p>
          </Card>
        ))}
      </WrapperCard>
    </div>
  );
};

export default Part8;