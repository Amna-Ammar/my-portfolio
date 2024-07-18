import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      {/* <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container> */}

      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Last Projects :</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-1.jpg" alt="portfolio-1" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-2.jpg" alt="portfolio-2" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-3.jpg" alt="portfolio-3" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-4.jpg" alt="portfolio-4" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-5.jpg" alt="portfolio-5" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-innner shadow-dark">
                <div className="portfolio-img">
                  <img src="images/portfolio/portfolio-6.jpg" alt="portfolio-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </HelmetProvider>
  );
};
