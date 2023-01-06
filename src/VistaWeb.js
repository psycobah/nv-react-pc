import React from "react";
import logo from "./images/logoNV.png";

const VistaWeb = ({poema}) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="random"
        style={{maxWidth: "600px", maxHeight: "400"}}
      />

      <p>Plan Alimentario</p>
     
      <p
        style={{
          color: "gray",
          fontStyle: "italic",
          fontSize: "10px",
        }}
      >
      </p>
      <br />
    </div>
  );
};

export default VistaWeb;
