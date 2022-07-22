import React from "react";
// import pic1 from "pic1.jpg";

const Part7 = () => {
  return (
    <div>
      <div>
        <h2>Time tracking apps</h2>
        <p>
          Clockify works across devices. Track time from anywhere — all data is
          synced online.
        </p>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "image/pic1.jpg"}
          alt=""
          width={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "image/pic3.jpg"}
          alt=""
          width={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "image/pic4.png"}
          alt=""
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default Part7;
