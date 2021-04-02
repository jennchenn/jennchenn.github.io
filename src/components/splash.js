import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import "../styles/global.css";

const pageStyles = {
  fontFamily: "Roboto, sans-serif, serif",
  margin: "0px auto",
  maxWidth: "723px",
};

const body = {
  paddingTop: "70px",
  paddingBottom: "100px",
  fontSize: "20px",
  color: "#403e3e",
  paddingRight: "40px",
  paddingLeft: "40px",
};

const header = {
  color: "#000000",
  fontSize: "38px",
  marginBottom: "50px",
};

const column = {
  paddingLeft: "0px",
  paddintRight: "0px",
};

const alignRight = {
  textAlign: "right",
};

const alignCentre = {
  textAlign: "center",
};

const Splash = () => {
  return (
    <div>
      <title>Jennifer Chen</title>
      <Header />
      <div style={pageStyles}>
        <div style={body}>
          <h1 style={header}>Hi I'm Jennifer — aspiring engineer</h1>
          <p>
            I am currently in my third year of Systems Design Engineering at the
            University of Waterloo.
            <br />
            <br />
            Previously I’ve worked as a Full-Stack Developer at Scotiabank, Data
            Engineering Intern at The Globe and Mail and Software Engineering
            Intern at Ratio.City.
            <br />
            <br />
            Outside of class I manage a team of 75+ students at Waterloop.
            <br />
            <br />
            Currently seeking internships for Fall 2021 and Summer 2022—let’s
            chat!
          </p>
          <Container fluid>
            <Row>
              <Col style={column}>
                <a href="https://www.linkedin.com/in/jenniferjcchen">
                  linkedin
                </a>
              </Col>
              <Col style={(column, alignCentre)}>
                <a href="https://www.linkedin.com/in/jenniferjcchen">RESUME</a>
              </Col>
              <Col style={(column, alignCentre)}>
                <a href="https://github.com/jennchenn">github</a>
              </Col>
              <Col style={(column, alignRight)}>
                <a href="mailto:j759chen@uwaterloo.ca">email</a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Splash;
