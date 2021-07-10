import React, { Component } from "react";
import { CardTitle } from "react-mdl";
import "../App.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="div">
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <h2 className="head">CA Native, CO living</h2>
        <p className="h3">
         Hey! I'm Lyndsey, nice to meet you.I'm currently finishing up a fullstack flex program and am an aspiring front end web developer. I live
          in Denver, CO with my amazing husband, beautiful daughter and
          incredibly lazy dog. 
        </p>
        <div>
          <CardTitle
            style={{
              height: "400px",
              width: "600px",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url(/images/theo.jpg",
              color: "black",
            }}
          ></CardTitle>
        </div>
      </div>
    );
  }
}

export default AboutMe;
