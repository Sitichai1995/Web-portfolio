import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hy0fxc6', 'template_ku56s1c', form.current, 'UFRh0F7LPjsGwS4yT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact us</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="user_name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="user_email"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="user_number" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message"></textarea>
                      <button type="submit"><span> sending...</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
