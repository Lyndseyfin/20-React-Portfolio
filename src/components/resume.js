import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}></div>

            <h2 style={{ paddingTop: "2em" }}>Lyndsey Finamore</h2>
            <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "60%" }} />
            <p>
              
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Denver, CO</p>
            <h5>Phone</h5>
            <p>720.201.5989</p>
            <h5>Email</h5>
            <p>lyndseyfinamore@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Main Skills</h2>
            <ul>
              <li>React</li>
              <li>
                Browser Based Technologies (Javascript, HTML, CSS, jQuery)
              </li>
              <li>Databases (MySQL, MongoDB) </li>
              <li>Deployment (Heroku, Git, Netlify)</li>
              <li>Server Side Development (Node.js, Express, MERN)</li>
            </ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
