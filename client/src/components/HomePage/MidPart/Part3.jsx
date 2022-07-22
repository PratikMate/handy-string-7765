import React from "react";
// import { SECONDPAGE_HOME_H2, SECONDPAGE_HOME_H1 } from "./Homecss";
import styled from "styled-components";

function Part3() {
  const H1_CUSTOM = styled.h1`
    // font-size: 40px;

    color: #3d4853;
    font-weight: 500;
  `;

  const H2_CUSTOM = styled.p`
    font-size: 20.8px;
    color: #5a6b7b;
  `;
  return (
    <div style={{ marginTop: "50px" }}>
      <H1_CUSTOM>Time management features</H1_CUSTOM>
      <H2_CUSTOM>
        Track productivity, attendance, and billable hours with a simple <br />
        time tracker and timesheet.
      </H2_CUSTOM>
    </div>
  );
}

export default Part3;
