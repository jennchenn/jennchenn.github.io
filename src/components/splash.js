import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/global.css";
import "../styles/fade.css";

const pageStyles = {
  fontFamily: "Roboto, sans-serif, serif",
  margin: "0px auto",
  maxWidth: "723px",
};

const body = {
  paddingTop: "70px",
  paddingBottom: "100px",
  paddingRight: "40px",
  paddingLeft: "40px",
};

const header = {
  color: "#000000",
  fontSize: "38px",
  marginBottom: "50px",
};

const paragraphText = {
  fontSize: "20px",
  color: "#403e3e",
  marginBottom: "40px",
};

const column = {
  paddingLeft: "0px",
  paddingRight: "0px",
};

const alignRight = {
  textAlign: "right",
};

const alignLeft = {
  textAlign: "left",
};

const alignCentre = {
  textAlign: "center",
};

const link = {
  color: "#403e3e",
  fontSize: "20px",
  backgroundColor: "#E0F0FF",
};

const engineering = {
  backgroundColor: "#E7E2FF",
};

const scotia = {
  backgroundColor: "#FFE0EB",
};

const globe = {
  backgroundColor: "#FAFFE0",
};

const ratio = {
  backgroundColor: "#E0FFE5",
};

const Splash = () => {
  const isVisible = true;
  return (
    <div>
      <title>Jennifer Chen</title>
      <div style={pageStyles}>
        <div style={body}>
          <ReactCSSTransitionGroup
            transitionName="header"
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            <h1 style={header}>Hi I'm Jennifer — aspiring engineer</h1>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName="body"
            transitionAppear={true}
            transitionAppearTimeout={700}
          >
            <p style={paragraphText}>
              I am currently in my third year of{" "}
              <span style={engineering}>Systems Design Engineering</span> at the
              University of Waterloo.
              <br />
              <br />
              Previously I’ve worked as a{" "}
              <span style={scotia}>Full-Stack Developer</span> at Scotiabank,{" "}
              <span style={globe}>Data Engineering Intern</span> at The Globe
              and Mail and{" "}
              <span style={ratio}>Software Engineering Intern</span> at
              Ratio.City.
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
                <Col style={{ ...column, ...alignLeft }}>
                  <a
                    style={link}
                    href="https://www.linkedin.com/in/jenniferjcchen"
                  >
                    linkedin
                  </a>
                </Col>
                <Col style={{ ...column, ...alignCentre }}>
                  <a
                    style={link}
                    href="https://www.linkedin.com/in/jenniferjcchen"
                  >
                    RESUME
                  </a>
                </Col>
                {/* <Col style={(column, alignCentre)}>
                <a href="https://github.com/jennchenn">github</a>
              </Col> */}
                <Col style={{ ...column, ...alignRight }}>
                  <a
                    className="link-hover"
                    style={link}
                    href="mailto:j759chen@uwaterloo.ca"
                  >
                    email
                  </a>
                </Col>
              </Row>
            </Container>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Splash;
