import React from 'react'
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import { useRef } from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";
import mailRobot from "../assets/img/mailRobot.png"
import toast, {Toaster} from 'react-hot-toast';
import colorSharp from "../assets/img/color-sharp.png"
import rocketContact from "../assets/img/rocketContact.gif"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID , form.current, {
        publicKey: "QVOPB14i1CwNq_yS_",
      })
      
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message Sent Successfully!");

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Please Try Again!")
        },
      );
  };

  return (
    <section className='contact' id='connect'>
        <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={rocketContact} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                 <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col style={{marginBottom:10}}><input type="text" name="firstName" placeholder='First Name'/></Col>
                    <Col style={{marginBottom:10}}><input type="text" name="lastName" placeholder='Last Name' /></Col></Row><Row>
                    <Col style={{marginBottom:10}}><input type="tel" name="number" placeholder='Phone No.' /></Col>                   
                    <Col style={{marginBottom:10}}><input type="email" name="email" placeholder='Your Email Address' /></Col>
                    <Row><textarea name="message"  placeholder='Message' style={{marginLeft:12, marginBottom:10}}/>
                    <input type="submit" value="Send" style={{marginLeft:12}} /></Row>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
                  <img className="background-image-left" src={colorSharp} alt="Image" />

        </Row>
        <Toaster />

      </Container>
    </section>
  )
}

