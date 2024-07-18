import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <section className="about section" id="about">
        <Container className="container">
          <Helmet>
            <meta charSet="utf-8" />
            <title> About | {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>


          {/* <--------------------------> */}
          <Row>
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </Row>
          <Row >
            <div className="about-content padd-15">
              <Row>
                <div className="about-text padd-15">
                  <h3>I'm Alimi Mousad and <span>Web Developer</span></h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, itaque? Excepturi doloribus perferendis rerum ipsum
                    aperiam aspernatur mollitia vel tenetur in adipisci quidem
                    reprehenderit consequatur eveniet earum quod, a pariatur.
                  </p>
                </div>
              </Row>
              <Row>
                <div className="personal-info padd-15">
                  <Row>
                    <div className="info-item padd-15">
                      <p>Birthday : <span>17 sep 1999</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Age : <span>22</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Website : <span>www.domain.com</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Email : <span>info@gmail.com</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Degree : <span>CS</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Phone : <span>+880 1234567890</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>City : <span>Dhaka</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Freelance : <span>Available</span></p>
                    </div>
                  </Row>
                  <Row>
                    <div className="buttons padd-15">
                      <a href="#" className="btn">Download CV</a>
                      <a href="#contact" className="btn hire-me">Hire Me</a>
                    </div>
                  </Row>
                </div>
                <div className="skills padd-15">
                  <Row>
                    <div className="skills-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }}></div>
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }}></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>JS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "65%" }}></div>
                        <div className="skill-percent">65%</div>
                      </div>
                    </div>
                    <div className="skills-item padd-15">
                      <h5>PHP</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }}></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </Row>
                </div>
              </Row>
              <Row>
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <Row>
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <Row>
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>

                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2013 - 2015
                          </h3>
                          <h4 className="timeline-title">
                            Master in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Culpa eius sit praesentium
                            labore perspiciatis deleniti et nobis alias quas
                            nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </Row>
            </div>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};
