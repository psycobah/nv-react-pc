import React from "react";
import logo from "./images/logoNV.png";

const VistaWeb = ({data}) => {

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
      <h1> Plan de {data.nombre}</h1>
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
