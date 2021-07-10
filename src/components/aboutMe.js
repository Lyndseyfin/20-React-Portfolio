import React, { Component } from "react";
import { CardTitle } from "react-mdl";
import "../App.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="div">
        <div className="bg_image">
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <div className="head">
            <br></br>
            <br></br>
            <h2>Hey! I'm Lyndsey, nice to meet you.</h2>
            <br></br>
            <br></br>
            <p className="h3" style={{fontSize:"20px", color:"black"}}>
              I'm a former HR Representative and an aspiring front end web
              developer. I'm currently finishing up a fullstack flex program
              through University of Denver Coding Bootcamp and due to graduate in July,
              2021. As a CA native ready for a change, I decided to move to Denver, CO where I was fortunate enough to have met my amazing husband, we now share a beautiful
              one year old daughter and an incredibly lazy dog.
            </p>
            <CardTitle
              style={{
                height: "300px",
                width: "320px",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(/images/theo.jpg",
                color: "black",
                float: "right",
                borderRadius: "50%",
                display: "flex",
              }}
            ></CardTitle>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
