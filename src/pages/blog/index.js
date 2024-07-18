import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";


export const Blog = () => {
    return (

        <HelmetProvider>
            <section className="blog section" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="blog-heading padd-15">
                            <h2>My Recent Blogs :</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="blog-item padd-15">
                            <div className="blog-item-inner">
                                <div className="image">
                                    <img src="images/portfolio/portfolio-1.jpg" alt="" />
                                </div>
                                <div className="blog-info">
                                    <div className="category">
                                        <a href="#">
                                            <p><i className="fa-sharp fa-solid fa-book-open-reader"></i> Category 01</p>
                                        </a>
                                    </div>
                                    <div className="date">
                                        <p><i className="fa-solid fa-calendar-days"></i> 25 July, 1999</p>
                                    </div>
                                </div>
                                <a href="blog-single.html">
                                    <h4>Blog Title 01</h4>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Blanditiis pariatur consectetur doloremque.
                                </p>
                                <a href="blog-single.html">Read More...</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </HelmetProvider>

    );
};
