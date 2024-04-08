import React from "react";

const CarsId = ({params}) => {
  return (
    <div>
      <h1>Hello! You are on {params.id}</h1>
    </div>
  )
};

export default CarsId;
