import React from "react";

const Btn = ({
  label,
  bg = "#DB4444",
  color = "#fff",
  padding = "16px 48px",
  border = "none",
  round = "4px",
  size = "18px",
  flex = "flex",
  center = "center",
  space= "40px"
}) => {
  return (
    <div style={{ display: flex, alignItems: center, justifyContent: center, margin: space }}>
      <button
        style={{
          background: bg,
          color: color,
          padding: padding,
          border: border,
          outline: border,
          borderRadius: round,
          fontSize: size,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Btn;
