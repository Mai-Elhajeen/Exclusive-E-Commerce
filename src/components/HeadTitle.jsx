import React from "react";

const HeadTitle = ({
  title = "Today's",
  width = "20px",
  height = "40px",
  color = "#DB4444",
  size = "16px",
  radius = "4px",
  flex = "flex",
  center = "center",
}) => {
  return (
    <div style={{ display: flex, alignItems: center }}>
      <div
        style={{
          background: color,
          width: width,
          height: height,
          borderRadius: radius,
        }}
      ></div>
      <h3 style={{ color: color, paddingLeft: size }}>{title}</h3>
    </div>
  );
};

export default HeadTitle;
