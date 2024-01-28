import React from "react";
import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <SpinnerDotted color="red" radius={"8px"} />
    </div>
  );
};

export default Loading;
