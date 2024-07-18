import React from "react";
import "../../assets/css/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import hero from '../../assets/images/hero.jpg';
export const Home = () => {
  return (
    <HelmetProvider>
      <section className="home active section" id="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name">Amna Ammar</span>
              </h3>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p>
                I'm a web designer with extensive experience for over 4
                years. My expertise is to create and design website, graphic
                design, and many more...
              </p>
              <a href="#" className="btn">Download CV</a>
            </div>
            <div className="home-img padd-15">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
