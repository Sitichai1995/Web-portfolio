import { Container, Row, Col } from "react-bootstrap";
import NavLinkedIn from '../assets/img/linkedin.png';
import NavGithub from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={2} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%8A%E0%B8%B1%E0%B8%A2-%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-442b041b7/"><img src={NavLinkedIn} alt="f-linkedin" /></a>
            <a href="https://github.com/Sitichai1995"><img src={NavGithub} alt="f-github" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
