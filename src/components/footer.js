import React, {useState} from "react";
import cactus from "../assets/cactus.png"
import flower from "../assets/flower.png"
const footer = {
  marginBottom: "40px",
  paddingLeft: "40px",
  paddingRight: "40px",
  textAlign: "center",
};
const image = {
  marginBottom: "40px",
  height: "300px",
  overflow: "clip",
}


function Footer() {
  const [imagePath, setImagePath] = useState(cactus)

  return (
    <div style={footer}>
      <div style={image} >
      <img src={imagePath} alt="cactus drawing" onMouseEnter={() => setImagePath(flower)} onMouseLeave={() => setImagePath(cactus)}>
      </img>
      </div>
      <div >made with <span role="img" aria-label="rice bowl emoji">🍚</span> and <span role="img" aria-label="yellow heart emoji">💛</span> © jenn c 2024</div>
    </div>
  );
}

export default Footer;
