import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// skills
import { skills } from "./skills-data";

import "./skills.styles.css";

const Skills = () => {
    return (
    <div className="container pb-5">
    <h3 className="text-center mt-5">My Skills Set</h3>
    <CardDeck>
    <Row className="row mt-5 text-center mb-5">
    {/*Frontend*/}
    <Col md={4}>
    <Card className="col-md-4">
    <Card.Body>
    {/* Frontend */}
     <Card.Title className="text-center  card-title">Frontend</Card.Title>
                    <hr />
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                      {skills.frontend.map((skill, index) => (
                        <span className="p-2" key={index}>
                          <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
      {/* Backend */}
              <Col md={4}>
                <Card className="focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title className="text-center  card-title">Backend</Card.Title>
                    <hr />
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                      {skills.backend.map((skill, index) => (
                        <span className="p-2" key={index}>
                          <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
    {/* Database */}
                <Card className="focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title className="text-center  card-title">Database</Card.Title>
                    <hr />
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                      {skills.databases.map((skill, index) => (
                        <span className="p-2" key={index}>
                          <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                          </a>
                        </span>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
      <Card className="focus mt-2 mb-2">
                  <Card.Body>
                    <Card.Title className="text-center  card-title">Version Control</Card.Title>
                    <hr />
                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                      <span className="p-2">
                        <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                          <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                        </a>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardDeck>
    </div>
     );
    };
    export default Skills;