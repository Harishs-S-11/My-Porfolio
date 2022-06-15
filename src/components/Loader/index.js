import React from "react";
import Loader from "react-loader-spinner";

const Loaderr = () => {
  return (
    <div>
      <Loader
        type="ThreeCircles"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
}

export default Loaderr;
