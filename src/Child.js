import React from "react";
export const Child = (childToParent) => {
  const info = "this is data in child";

  return (
    <div>
      <p>this is child</p>
      <button onClick={() => childToParent(info)}>click me</button>
    </div>
  );
};
