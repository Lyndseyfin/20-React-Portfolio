import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
             
                      </div>

            <h2 style={{paddingTop: '2em'}}>Lyndsey Finamore</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '60%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Denver, CO</p>
            <h5>Phone</h5>
            <p>720.201.5989</p>
            <h5>Email</h5>
            <p>lyndseyfinamore@gmail.com</p>
            <h5>Web</h5>
            <p>web.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>>

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Main Skills</h2>
                Javascript
               <br></br>
                
                  HTML/CSS
                  <br></br>
                  
                NodeJS
                    
                <br></br> 
                  
                      React
                      
                      


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;