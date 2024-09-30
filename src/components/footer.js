import React, { useState } from "react";
import cactus from "../assets/cactus.svg";
import flower from "../assets/flower.svg";

const footer = {
  marginBottom: "40px",
  paddingLeft: "40px",
  paddingRight: "40px",
  textAlign: "center",
};

const imageDiv = {
  marginBottom: "40px",
  height: "300px",
  minWidth: "146px",
  overflow: "clip",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};

const imageCactus = {
  width: "100%",
  height: "226px",
  marginLeft: "auto",
  marginRight: "auto",
  cursor: "pointer",
};

const imageFlower = {
  width: "100%",
  height: "300px",
  marginLeft: "auto",
  marginRight: "auto",
  cursor: "pointer",
};

function Footer() {
  const [imagePath, setImagePath] = useState(cactus);

  return (
    <div style={footer}>
      <div style={imageDiv}>
        <img
          style={imagePath === cactus ? imageCactus : imageFlower}
          src={imagePath}
          alt="cactus drawing"
          onMouseEnter={() => setImagePath(flower)}
          onMouseLeave={() => setImagePath(cactus)}
        ></img>
      </div>
      <div>
        made with{" "}
        <span role="img" aria-label="rice bowl emoji">
          🍚
        </span>{" "}
        and{" "}
        <span role="img" aria-label="yellow heart emoji">
          💛
        </span>{" "}
        © jenn c 2024
      </div>
    </div>
  );
}

export default Footer;
