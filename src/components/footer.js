import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Footer() {

return(
    <footer className="mt-5">
        <Container fluid={true}>
            <Row className="border-top justify-content-between p-3 ">
                
                <Col className="p-0 d-flex justify-content-end" md={3}>
                    This site was made by Lyndsey Finamore.
                </Col>
                {/* <Card body><a href="https://github.com/ashleykohladler"> Github</a></Card> */}
                <a href="https://github.com/Lyndseyfin"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub icon by Icons8" className="icon"/></a>
                
      {/* <Card body><a href="https://www.linkedin.com/in/ashley-kohl-adler-0068727a/"> LinkedIn</a></Card> */}
      <a href="https://www.linkedin.com/in/ashley-kohl-adler-0068727a/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn by Icons8" className="icon"/></a>
      <a href="https://docs.google.com/document/d/1aIhJXObYmki3jWxl2iE4EfP1gGCD5_xsjpb8XpKgXW4/edit?usp=sharing"><img src="https://img.icons8.com/ios/50/000000/open-resume.png" alt="resume" className="icon"/></a>
            </Row>
        </Container>
    </footer>
)


}

export default Footer;