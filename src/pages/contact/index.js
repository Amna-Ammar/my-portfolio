import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <section className="contact section" id="contact">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>


        <div className="container">
          <Row>
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </Row>
          <h3 className="contact-title padd-15">Do You Have Any Questions?</h3>
          <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
          <Row>
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-phone"></i></div>
              <h4>Call Us On</h4>
              <p>+880 1234567890</p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
              <h4>Office</h4>
              <p>Jeddah</p>
            </div>

            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-envelope"></i></div>
              <h4>Email</h4>
              <p>info@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon"><i className="fa fa-globe-europe"></i></div>
              <h4>Website</h4>
              <p>www.domain.com</p>
            </div>
          </Row>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I'M VERY RESPONSIVE TO MESSAGES
          </h4>
          {/* <!-- Contact form --> */}
          <Row>
            <div className="contact-form padd-15">
              <Row>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </Row>
              <Row>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </Row>
              <Row>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </Row>
              <Row>
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button type="submit" className="btn">Send Message</button>
                  </div>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </section>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
