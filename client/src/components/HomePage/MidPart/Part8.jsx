import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import reviwewData from "./reviewData";

const Part8 = () => {
  console.log(reviwewData);
  const Card = styled.p`
    // width: 100%;
    padding: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  `;

  const WrapperCard = styled.div`
    width: 100%;
    display: grid;
    // grid-template-columns: repeat(4, 1fr);
    // grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    text-align: left;
    flex-wrap: auto;

    color: rgb(88, 84, 84);
    & 
  `;

  return (
    <div>
      <div style={{ color: "rgb(88, 84, 84)" }}>
        <h6>#1 RATED SOFTWARE</h6>
        <h2>Join millions of happy users</h2>
        <h4>
          Clockify is the best rated time tracking software with 4,100+ reviews.
        </h4>
      </div>
      <img
        src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg"
        width={"100%"}
        height={"50px"}
        alt=""
      />

      <WrapperCard>
        {reviwewData.map((el, index) => (
          <Card>
            <p id="title" style={{ fontWeight: "bold", fontSize: "14px" }}>
              {el.title}
            </p>
            <div id="x" style={{ color: "rgb(228, 228, 49)" }}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p id="disc" style={{ fontSize: "12px" }}>
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
// title: "Wonderful for tracking productivity",
// disc: "I enjoy it so much I use outside of work to track my own personal self-development.",
// author: "— Jessup S, Operations Associate",
// },
