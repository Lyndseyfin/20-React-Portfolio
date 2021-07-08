import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import "../App.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{ width: "80%", margin: "auto"  }}>
         
          {/*Project #1*/}
          <Grid>
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/recipes.png",
                    color: "black",
                  }}
                >
               
                </CardTitle>
                <CardText style={{whiteSpace: 'nowrap'}}>
                Lyric Finder
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Lyndseyfin/Lyric-finder"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://xzengeric.github.io/Project1/project1.html"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



                        {/*Project #2*/}

            <Cell col={4}>
              <Card shadow={0} className="card">


                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/project-2.png",
                    color: "black",
                  }}
                >
                 
                </CardTitle>
                <CardText>
                  Dateable
                </CardText>
                <CardActions border>
                <Button
                    href="https://github.com/Lyndseyfin/project-2"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://project-2-dates.herokuapp.com/home"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>




            {/*Project #3*/}
            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/Capture-3.PNG",
                    color: "black",
                   
                  }}
                >
                  
                </CardTitle>
                <CardText>
Workout Tracker               </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Lyndseyfin/18-Workout-Tracker"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://safe-ridge-92206.herokuapp.com/exercise?id=60d3d6c2e3040800154206b7"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>



            {/*Project #4*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/codeQuiz.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
PWA Budget Tracker 
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Lyndseyfin/-19-PWA-Online-Offline-Budget-Trackers"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://fierce-tor-51491.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>


            {/* Project 5*/}

            <Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/password.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
                 MVC Tech Blog
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/Lyndseyfin/14-MVC-Tech-Blog"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://immense-castle-80286.herokuapp.com/"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

{/* Project # 6 */}
<Cell col={4}>
              <Card shadow={0} className="card">
                <CardTitle
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(/images/WeatherCapture.PNG",
                    color: "black",
                  }}
                >
                  
                </CardTitle>
                <CardText>
Code Quiz
                </CardText>
                <CardActions border>
                  <Button






                    href="https://github.com/Lyndseyfin/04-Code-Quiz"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                                {" "}
                  <Button
                    href="https://github.com/Lyndseyfin/04-Code-Quiz"
                    target="_blank"
                    colored
                  >
                    Deployment
                  </Button>
                               
                </CardActions>

                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>


        </div>
      );
    } 
    
    else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell
              col={12}
              style={{ justifyContent: "center", display: "flex" }}
            >
            </Cell>
          </Grid>
        </div>
      );
      

    }
  }

  render() {
    return (
      <div className="category-Tabs">
        <Grid>
          <Cell col={12} style={{ margin: "auto" }}>
            <Tabs>
              <Tab style={{ fontSize: "14px", fontWeight: "bold" }}>
                My Projects
              </Tab>
            </Tabs>
          </Cell>
        </Grid>



        <section>
          <Grid>
            <Cell col={12}>
              <div>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;