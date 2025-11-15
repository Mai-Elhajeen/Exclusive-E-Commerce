import React from "react";

const Line = ({
  color = "#000",
  width = "100%",
  margin = "16px 0",
  border = "none",
  thickness = "1px",
  opacity = "30%",
}) => {
  return (
    <>
      <hr
        style={{
          backgroundColor: color,
          width: width,
          height: thickness,
          margin: margin,
          border: border,
          opacity: opacity,
        }}
      />
    </>
  );
};

export default Line;
