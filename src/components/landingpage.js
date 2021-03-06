import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component { 
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
        
            <div className="banner-text">
              <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet"/>

              <h1>Lyndsey Finamore </h1>


          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          {/* <a href="https://www.linkedin.com/in/lyndsey-finamore-516279136/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
           

          {/* Github */}
          <a href="https://github.com/Lyndseyfin" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;