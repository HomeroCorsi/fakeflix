import React from "react";

const Banner = ({ item }) => {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `url(${item?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: '10px 5px 5px black',
            }}
    ></div>
  );
};

export default Banner;