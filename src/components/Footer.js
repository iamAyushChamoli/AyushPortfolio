import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/upworkLogo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayush-chamoli-/" target="_blank" ><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/iamAyushChamoli" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.upwork.com/freelancers/~01757786a69e4df9cf" target="_blank"><img src={navIcon3} alt="Icon" /></a>

            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
