import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Resume from "../assets/JenniferChenResume.pdf";
import "../styles/global.css";
import "../styles/fade.css";

const pageStyles = {
  margin: "0px auto",
  maxWidth: "720px",
};

const body = {
  paddingTop: "70px",
  paddingBottom: "80px",
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
  paddingRight: "5px",
};

const link = {
  color: "#403e3e",
  fontSize: "20px",
  backgroundColor: "#E5FFFF",
};

const engineering = {
  backgroundColor: "#E7E2FF",
};

const datadog = {
  backgroundColor: "#CCBAE1",
};

const scotia = {
  backgroundColor: "#FFE0EB",
};

const globe = {
  backgroundColor: "#F0D2D1",
};

const embark = {
  backgroundColor: "#B6E1F7",
};

const waterloop = {
  backgroundColor: "#FAFFE0",
};

const ratio = {
  backgroundColor: "#E0FFE5",
};

const clearbridge = {
  backgroundColor: "#FFE8D1",
};

const blueprint = {
  backgroundColor: "#D1D9F0",
};

const bottomLinks = {
  display: "flex",
  justifyContent: "space-between",
};

const listItem = {
  marginTop: "10px",
  marginBottom: "10px",
};

const Splash = () => {
  return (
    <div>
      <title>Jennifer Chen</title>
      <div style={pageStyles}>
        <div style={body}>
          <ReactCSSTransitionGroup
            transitionName="header"
            transitionAppear={true}
            transitionAppearTimeout={300}
          >
            <h1 style={header}>Hi I'm Jennifer — aspiring engineer.</h1>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName="body"
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            <p style={paragraphText}>
              I am currently in my fourth year of{" "}
              <a
                className="link-hover"
                style={{ ...link, ...engineering }}
                href="https://uwaterloo.ca/systems-design-engineering/"
                target="_blank"
                rel="noreferrer"
              >
                Systems Design Engineering
              </a>{" "}
              at the University of Waterloo.
              <br />
              <br />
              Right now, I'm working on helping companies monitor their
              applications as a{" "}
              <a
                className="link-hover"
                style={{ ...link, ...datadog }}
                href="https://github.com/DataDog/dd-trace-rb"
                target="_blank"
                rel="noreferrer"
              >
                Software Engineering Intern
              </a>{" "}
              at Datadog.
              <br />
              <br />
              Previously, I've worked on problems like:
              <ul>
                <li style={listItem}>
                  Developing infrastructure for telematics and live-monitoring
                  of self-driving vehicles as a{" "}
                  <a
                    className="link-hover"
                    style={{ ...link, ...embark }}
                    href="https://www.embarktrucks.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Software Engineering Intern
                  </a>{" "}
                  @ Embark Trucks
                </li>
                <li style={listItem}>
                  Creating a platform to auto-approve car loans as a{" "}
                  <span style={scotia}>Full-Stack Engineering Intern</span> @
                  Scotiabank
                </li>
                <li style={listItem}>
                  Helping news companies make smarter paywall decisions as a{" "}
                  <a
                    className="link-hover"
                    style={{ ...link, ...globe }}
                    href="https://www.sophi.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Data Engineering Intern
                  </a>{" "}
                  @ The Globe and Mail
                </li>
                <li style={listItem}>
                  Informing better land development decisions as a{" "}
                  <a
                    className="link-hover"
                    style={{ ...link, ...ratio }}
                    href="https://www.ratio.city/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Software Engineering Intern
                  </a>{" "}
                  @ Ratio.City
                </li>
                <li style={listItem}>
                  Ensuring quality of mobile applications as a{" "}
                  <a
                    className="link-hover"
                    style={{ ...link, ...clearbridge }}
                    href="https://clearbridgemobile.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    QA Analyst
                  </a>{" "}
                  @ Clearbridge Mobile
                </li>
              </ul>
              <br />
              Outside of class I lead a tech for social good project at{" "}
              <a
                className="link-hover"
                style={{ ...link, ...blueprint }}
                href="http://uwblueprint.org/"
                target="_blank"
                rel="noreferrer"
              >
                Blueprint
              </a>{" "}
              and advise a team of 90+ students at{" "}
              <a
                className="link-hover"
                style={{ ...link, ...waterloop }}
                href="http://waterloop.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Waterloop
              </a>
              .
              <br />
              <br />
              Currently seeking full-time opportunities beginning Fall 2023 —
              let's chat!
            </p>
            <Container fluid>
              <Row style={bottomLinks}>
                <Col style={column}>
                  <a
                    style={link}
                    href={Resume}
                    download="Jennifer Chen Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    resume
                  </a>
                </Col>
                <Col style={column}>
                  <a
                    style={link}
                    href="https://www.linkedin.com/in/jenniferjcchen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin
                  </a>
                </Col>
                <Col style={column}>
                  <a
                    style={link}
                    href="https://github.com/jennchenn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </Col>
                <Col style={column}>
                  <a
                    className="link-hover"
                    style={link}
                    href="mailto:j759chen@uwaterloo.ca"
                    target="_blank"
                    rel="noreferrer"
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
