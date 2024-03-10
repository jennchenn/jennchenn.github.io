import React from "react";

const footer = {
  marginBottom: "40px",
  paddingLeft: "40px",
  paddingRight: "40px",
  textAlign: "center",
};

function Footer() {
  return (
    <div style={footer}>
      <div>made with <span role="img" aria-label="rice bowl emoji">🍚</span> and <span role="img" aria-label="yellow heart emoji">💛</span> © jenn c 2024</div>
    </div>
  );
}

export default Footer;
