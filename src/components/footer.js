import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render()  {
   return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3 ">
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Lyndsey Finamore.
          </Col>
          <a href="https://github.com/Lyndseyfin">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="GitHub icon by Icons8"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/lyndsey-finamore-516279136/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn by Icons8"
              className="icon"
            />
          </a>
        </Row>
      </Container>
    </footer>
  );
}}

export default Footer;
