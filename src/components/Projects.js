import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/colmar.jpg";
import projImg2 from "../assets/img/jammming.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Project from "../assets/img/project-bg.jpg";

export const Projects = () => {

  const projects = [
    {
      title: "Colmar Academy",
      description: "HTML & CSS",
      imgUrl: projImg1,
      link: "https://github.com/Sitichai1995/Html-cssTest"
    },
    {
      title: "Jammming project",
      description: "React",
      imgUrl: projImg2,
      link: "https://github.com/Sitichai1995/Jammming-assessment",
    },
    {
      title: "Final project",
      description: "MERN Stack CRUD Project ",
      imgUrl: projImg2,
      link:"#",
    },
  ];

  return (
    <div>
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience/Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Contact us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                      <ul>
                      <li>Learner in Generation Software Deverloper Bootcamp</li>
                      <li>
                      Teacher assistance in Science Lab School 
                      </li>
                      <li>Medical supplies management officer in Paolo Phaholyothin Hospital
                      </li>
                      </ul>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}
