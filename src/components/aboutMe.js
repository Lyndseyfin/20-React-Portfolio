import React, {Component} from 'react';

class AboutMe extends Component {

    render(){
        return(
            <div className="div">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet"></link>
            <h2 className="head">ABOUT ME</h2>
              <h4 className="h4">
                  <br></br>
                  <br></br>
              <p className="h3">
              Hey! I'm Lyndsey. Nice to meet you.
I'm currently finishing up a full stack flex program and am an aspiring front end web developer. 
I live in Denver, CO with my amazing husband, beautiful daughter and incredibly lazy dog.
        </p>
        <p className="h3">
     Skills:
React
Browser Based Technologies (Javascript, HTML, CSS, jQuery)
Databases (MySQL, MongoDB)
Deployment (Heroku, Git, Netlify)
Server Side Development (Node.js, Express, MERN) 
    </p>
</h4>
</div>

    )
  }
}

export default AboutMe;