import React from "react";

const Component = () => {
  const onClick = () => {
    alert("THE AUDACITY");
  };
  return (
    <>
      <button onClick={onClick}>don't click it</button>
    </>
  );
};

export default Component;
