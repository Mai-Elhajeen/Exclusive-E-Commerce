import React from "react";

const Title = ({title="Flash Sales", color= "#000", size= "40px"}) => {
  return <>
  <h4 style={{color: color, fontSize: size}}>{title}</h4>
  </>;
};

export default Title;
